const { Pokemon, Type } = require("../db");
const axios = require("axios");

const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const urlType = "https://pokeapi.co/api/v2/type";



const getPokemons= async () => {
  const api = await axios.get(pokeApi + `?limit=20`);
  const pokeUrl = [];
  api.data.results.map((r) => {
    pokeUrl.push(axios.get(r.url).then((response) => response.data));
  }); //pusheamos las properties de las url para poder manipularlas idividualmente

  const pokeProps = Promise.all(pokeUrl).then(
    (
      response //mapeamos las propiedades individuales
    ) =>
    response.map(p=>{
      const { id, name, sprites, types, weight, stats, height } = p;
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
    }))
     
  return await pokeProps; //retornamos el objeto con sus propiedades
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
  const { sprites,id, types, weight, stats, height } = respose.data;
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
      name: name,
    },
  });
  if (datasearch) {
    return datasearch.toJSON(); // Asegurarse de que el resultado sea un objeto JSON
  } else {
    const nameApi = await searchApi(name);
    return nameApi;
  }  // return datasearch ? await datasearch : datoName;
};

// Logica para el id

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
  // getPokemos,
  clearPokes,
  updatePokes,
  getTypesApi,
};
