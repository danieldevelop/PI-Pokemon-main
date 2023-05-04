import axios from 'axios';
import  {
    ALL_POKEMONS,
    BY_NAME
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
