const {
    getAllPokemons,
} = require("../controllers/pokemonController")

const getPokemonsHandler = async (req, res) => {
    try {
        const pokemons = await getAllPokemons();
        res.status(200).json(pokemons);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


module.exports = {
    getPokemonsHandler,
}