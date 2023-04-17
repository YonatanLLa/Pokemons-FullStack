const {Router} = require("express")
const typesRouter = Router();
const {typePokemons} = require('../handlers/TypesHandler')


typesRouter.get('/', typePokemons)

module.exports = typesRouter