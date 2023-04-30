const { Pokemon } = require('../db');
const axios = require('axios');


const getPokemonApi = async () => {
    const arrPockemon = []; // para agregar los pokemones de la api
    const pockemons = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')).data.results;

    for (let pokemon of pockemons) {
        const el = (await axios.get(pokemon.url)).data;

        arrPockemon.push({
            id: el.id,
            name: el.name,
            image: el.sprites.other.dream_world.front_default,
            types: el.types.map(type => type.type.name),
        });
    };
    return arrPockemon;
}


const getPokemonsDb = async () => {
    const pokemons = await Pokemon.findAll();
    return pokemons;
}


const getAllPokemons = async () => {
    const apiPokemons = await getPokemonApi();
    const dbPokemons = await getPokemonsDb();

    const allPokemons = apiPokemons.concat(dbPokemons);
    return allPokemons;
}


module.exports = {
    getAllPokemons,
}