const { getTypesApi } = require("../controllers/pokeControllers");

const typePokemons = async(req, res) => {
  try {
    const type = await getTypesApi();
    res.status(201).json(type);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { typePokemons };
