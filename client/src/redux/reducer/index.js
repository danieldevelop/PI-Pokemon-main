import {
    ALL_POKEMONS,
    BY_NAME,
    BY_ID,
    CREATE_POKEMON,
    ALL_TYPES,
} from "../actions/actions-types";

const initialState = {
    allPokemons: [],
    pokemonsCopy: [], // hace una copia de todos los pokemons, con esto podemos volver al estado original
    detailPokemon: [],
    types: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemonsCopy: action.payload,
            };
        case BY_NAME:
            return {
                ...state,
                allPokemons: action.payload,
            };
        case BY_ID:
            return {
                ...state,
                detailPokemon: action.payload,
            };
        case CREATE_POKEMON:
            return {
                ...state,
            };
        case ALL_TYPES:
            return {
                ...state,
                types: action.payload,
            };
        default:
            return state;
    }
};


export default rootReducer;
