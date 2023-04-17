const pokeApi = "https://pokeapi.co/api/v2/pokemon";
const { Pokemon, Type } = require("../db");
const axios = require("axios");

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

module.exports = getPokemos;
