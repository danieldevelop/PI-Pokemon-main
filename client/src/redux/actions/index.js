import axios from 'axios';
import  {
    ALL_POKEMONS
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