const {
    getAllPokemons,
    getPokemonById,
} = require("../controllers/pokemonController")


const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;

    try {
        if (name) {
            const pokemons = await getAllPokemons(name);
            if (!pokemons) return res.status(404).json({ message: "No se encontro el pokemon " + name});
            return res.status(200).json(pokemons);
        }
        const pokemons = await getAllPokemons();
        return res.status(200).json(pokemons);

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