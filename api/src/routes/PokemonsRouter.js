const { Router } = require("express");
const pokeRouter = Router();
const {
  creatPokeHandler,
  getPokeHandler,
  getPokeById,
  deletePokes,
  modifiPoke
} = require("../handlers/PokeHandler");
const { validate } = require("../handlers/validate");

pokeRouter.post("/", creatPokeHandler);
pokeRouter.get("/", getPokeHandler);
pokeRouter.get("/:id", getPokeById);
pokeRouter.delete('/:id', deletePokes)
pokeRouter.put('/:id', modifiPoke)

module.exports = pokeRouter;
