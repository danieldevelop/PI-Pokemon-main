const {
    getAllPokemons,
    getPokemonById,
} = require("../controllers/pokemonController")


const getPokemonsHandler = async (req, res) => {
    try {
        const pokemons = await getAllPokemons();
        res.status(200).json(pokemons);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const getPokemonsByIdHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await getPokemonById(id);
        if (!response) return res.status(404).json({ message: "Pokemon not found" });
        return res.status(200).json(response);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = {
    getPokemonsHandler,
    getPokemonsByIdHandler,
}