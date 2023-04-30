const { Router } = require('express');
const {
    getPokemonsHandler,
    getPokemonsByIdHandler,
} = require("../handlers/pokemonHandler");

const pokemonRouter = Router();

pokemonRouter.get("/", getPokemonsHandler);
pokemonRouter.get("/:id", getPokemonsByIdHandler);


module.exports = pokemonRouter;
