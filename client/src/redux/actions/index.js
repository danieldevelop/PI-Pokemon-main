import axios from 'axios';
import  {
    ALL_POKEMONS,
    BY_NAME,
    BY_ID,
    CREATE_POKEMON,
    ALL_TYPES,
} from "./actions-types";


export const getPokemons = () => {
    return async (dispatch) => {
        const response = (await axios.get("http://localhost:3001/pokemon")).data;
        return dispatch({
            type: ALL_POKEMONS,
            payload: response,
        });
    };
};

export const getByName = (name) => {
    return async (dispatch) => {
        try {
            const response = (await axios.get(`http://localhost:3001/pokemon?name=${name}`)).data;
            return dispatch({
                type: BY_NAME,
                payload: response,
            });
        } catch (err) {
            alert(`!Ups el pokemon ${name} no existe`);
        }
    };
};

export const getById = (id) => {
    return async (dispatch) => {
        const response = (await axios.get(`http://localhost:3001/pokemon/${id}`)).data;

        return dispatch({
            type: BY_ID,
            payload: response,
        });
    };
};

export const createPokemon = (pokemon) => {
    return async (dispatch) => {
        const response = (await axios.post("http://localhost:3001/pokemon/create", pokemon)).data;

        return dispatch({
            type: CREATE_POKEMON,
            payload: response,
        });
    };
};

export const getTypes = () => {
    return async (dispatch) => {
        const response = (await axios.get("http://localhost:3001/types")).data;

        return dispatch({
            type: ALL_TYPES,
            payload: response,
        });
    };
};