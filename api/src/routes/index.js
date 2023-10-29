const { Router } = require("express");
const morgan = require('morgan')
const express = require('express')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokeRouter = require("./PokemonsRouter");
const typesRouter = require("./TypesRouter")
const routes = Router();
routes.use(morgan("dev")); //morgan for consola
routes.use(express.json());
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use("/pokemons", pokeRouter);
routes.use("/types", typesRouter)


module.exports = routes;
