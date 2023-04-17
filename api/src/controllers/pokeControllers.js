const { Pokemon, Type } = require("../db");
const axios = require("axios");

const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const urlType = "https://pokeapi.co/api/v2/type";

// const pokeApi = "https://pokeapi.co/api/v2/pokemon";

const getPokemons = async () => {
  const response = await axios.get(`${pokeApi}?limit=15`);

  const promises = response.data.results.map((pokemon) => {
    return axios
      .get(pokemon.url)
      .then((res) => res.data)
      .then((data) => {
        const { id, name, sprites, types, weight, stats, height } = data;
        return {
          id,
          name,
          image: sprites.other.home.front_default,
          // imageDetail: sprites.other.home.front_default,
          Types: types.map((t) => t.type.name),
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
          weight,
          height,
          created: false,
        };
      })
      .catch((error) => error);
  });

  return Promise.all(promises);
};

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
  const [pokemon, created] = await Pokemon.findOrCreate({
    where: { name },
    defaults: { name, hp,image, attack, speed, defense, height, weight,	created: false },
  });
  pokemon.addTypes(types)
  return created ? await pokemon : { message: "Pokemon already exists" };
};
// se devuel un pokemon encontrado


const getAllPokes = async () => {

  const databasePokes = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'],
      through:{
        attributes: []
      }
    },
  })
  const pokesWithTypes = databasePokes.map(poke => {
    const Types = poke.Types.map(type => type.name);
    return {...poke.toJSON(), Types};
})

  const apiPokes = await getPokemons()
  return [...pokesWithTypes, ...apiPokes];
};

// controller sobre buscar name
const searchApi = async (name) => {
  const respose = await axios.get(`${pokeApi}/${name}`);
  const { sprites, types, weight, stats, height } = respose.data;
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
const searchPoke = async (name) => {
  const datasearch = await Pokemon.findOne({
    where: {
      name,
    },
  });
  return datasearch ? datasearch : await searchApi(name);
};

// Logica para el id
const pokeId = async (id) => {
  const response = await axios(`${pokeApi}/${id}`);
  return {
    id: response.data.id,
    name: response.data.name,
    image: response.data.sprites.other.home.front_default,
    Types: response.data.types.map((t) => t.type.name),
    hp: response.data.stats[0].base_stat,
    attack: response.data.stats[1].base_stat,
    defense: response.data.stats[2].base_stat,
    speed: response.data.stats[5].base_stat,
    weight: response.data.weight,
    height: response.data.height,
    created: false,
  };
};
// me falta que me busque al servidor
const getPokemos = async (id, sourse) => {
  if (sourse === "API") {
    return await pokeId(id);
  }
  return await Pokemon.findByPk(id);
};
// sourse === "API" ? await pokeId(id) : await Pokemon.findByPk(id);

// Revisar no funciona revisar
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
  getPokemos,
  clearPokes,
  updatePokes,
  getTypesApi,
};
