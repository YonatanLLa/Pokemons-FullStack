const {
  createPokeDex,
  searchPoke,
  getAllPokes,
  // getPokemos,
  clearPokes,
  updatePokes,
} = require("../controllers/pokeControllers");
const pokeId = require("../controllers/pokeId")
// const {Pokemon} = require('../db')

const creatPokeHandler = async (req, res) => {
  try {
    console.log(req.body);
    const { name, hp, attack, defense, speed, height, weight, image, types } =
      req.body;
    const newPokes = await createPokeDex(
      name,
      hp,
      attack,
      types,
      defense,
      speed,
      height,
      weight,
      image
    );
    res.status(200).json(newPokes);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getPokeHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const results = name ? await searchPoke(name) : await getAllPokes();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPokeById = async (req, res) => {
  try {
    const { id } = req.params;
    const sourse = isNaN(id) ? "BDD" : "API";
    const poke = await pokeId(id, sourse);
    res.status(200).json(poke);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const deletePokes = async (req, res) => {
  try {
    const { id } = req.params;
    const clear = await clearPokes(id);
    res.status(200).json(clear);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const modifiPoke = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, hp, attack, speed, defense, height, weight } = res.query;

    const upPoke = await updatePokes(id, {
      name,
      hp,
      attack,
      speed,
      defense,
      height,
      weight,
    });
    res.status(200).json(upPoke);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  creatPokeHandler,
  getPokeHandler,
  getPokeById,
  deletePokes,
  modifiPoke,
};
