const { Router } = require('express');
const {
    getPokemonsHandler,
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonsHandler);


module.exports = pokemonRouter;
