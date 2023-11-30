const { Pokemon, Type } = require("../db");
const axios = require("axios");

const pokeApi = "https://pokeapi.co/api/v2/pokemon";

const urlType = "https://pokeapi.co/api/v2/type";

const getPokemons = async () => {
	
		const requests = [];
	
		for (let i = 1; i <= 100; i++) {
		  requests.push(axios.get(`${pokeApi}/${i}`));
		}
	
		const responses = await Promise.all(requests);
		const pokemonData = responses.map((response) => {
		  const { id, name, sprites, types, weight, stats, height } = response.data;
	
		  return {
			  id,
			  name,
			  image: sprites.other.home.front_default,
			  types: types.map((t) => t.type.name),
			  hp: stats[0].base_stat,
			  attack: stats[1].base_stat,
			  defense: stats[2].base_stat,
			  speed: stats[5].base_stat,
			  weight,
			  height,
			  created: false,
		  };
		});
	
		return pokemonData
};

// const getPokemons = async (req, res) => {
	
//   };
const createPokeDex = async (
	name,
	hp,
	attack,
	types,
	speed,
	defense,
	height,
	weight,
	image
) => {


	const pokeApi = await getPokemons();
	const dato = pokeApi.filter((poke) => {
		return poke.name === name;
	});
	if (dato.length > 0) {
		throw new Error( "Pokemon already exists" );
	}



	const [pokemon, created] = await Pokemon.findOrCreate({
		where: { name },
		defaults: {
			name,
			hp,
			image,
			attack,
			speed,
			defense,
			height,
			weight,
			created: true,
		},
	});

	const pokeName = await Type.findAll({
		where: {
			name: types,
		},
	});


	pokemon.addTypes(pokeName);
	return created ? await pokemon : { message: "Pokemon already exists" };
};
// se devuel un pokemon encontrado


const getAllPokes = async () => {
	const databasePokes = await Pokemon.findAll({
		include: {
			model: Type,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
	});


	
	const pokesWithTypes = databasePokes.map((poke) => {
		const types = poke.types.map((type) => type.name);
		return { ...poke.toJSON(), types };
	});


	const apiPokes = await getPokemons();
	return [...pokesWithTypes, ...apiPokes];
};

// controller sobre buscar name
const searchApi = async (name) => {
	const respose = await axios.get(`${pokeApi}/${name}`);
	const { sprites, id, types, weight, stats, height } = respose.data;
	return {
		id,
		name,
		image: sprites.other.home.front_default,
		Types: types.map((t) => t.type.name),
		hp: stats[0].base_stat,
		attack: stats[1].base_stat,
		defense: stats[2].base_stat,
		speed: stats[5].base_stat,
		weight,
		height,
		created: false,
	};
};

// Buscar Pokemon
const searchPoke = async (name) => {
	const datasearch = await Pokemon.findOne({
		where: {
			name: name,
		},
	});
	if (datasearch) {
		return datasearch.toJSON(); // Asegurarse de que el resultado sea un objeto JSON
	} else {
		const nameApi = await searchApi(name);
		return nameApi;
	} // return datasearch ? await datasearch : datoName;
};

const getTypesApi = async () => {
	const response = await axios.get(urlType);
	const types = response.data.results;
	const allTipes = [];

	for (let type of types) {
		const viewExist = await Type.findOne({ where: { name: type.name } });
		viewExist
			? allTipes.push(viewExist)
			: allTipes.push(await Type.create({ name: type.name }));
	}
	return allTipes;
};
// Eliminar pokemons
const clearPokes = async (id) => {
	const pokeDelete = await Pokemon.findByPk(id);
	if (!pokeDelete) throw new Error("Not found");
	await pokeDelete.destroy();
	return { message: "Delete Pokemon" };
};

// -> revisar <-
const updatePokes = async (
	id,
	{ name, hp, attack, speed, defense, height, weight }
) => {
	const pokemons = await Pokemon.findByPk(id);
	if (!pokemons) throw new Error("Invalide");
	await pokemons.update({ name, hp, attack, speed, defense, height, weight });
	return pokemons;
};

module.exports = {
	createPokeDex,
	getAllPokes,
	searchPoke,
	clearPokes,
	updatePokes,
	getTypesApi,
};
