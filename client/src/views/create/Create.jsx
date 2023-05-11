import { React, useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import style from "./create.module.css";
import validate from "./validate";
import { createPokemon, getTypes } from '../../redux/actions';

import Navbar from "../../components/navbar/Navbar";


const Create = () => {
    const dispatch = useDispatch();

    // traemos los tipos de pokemon del store
    const types = useSelector((state) => state.types);

    const [pokemon, setPokemon] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: "",
    });

    const [error, setError] = useState({
        name: "",
        image: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        type: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPokemon({
            ...pokemon,
            [name]: value
        });

        setError(
            validate({
                ...pokemon,
                [name]: value
            })
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.keys(error).length === 0) {
            dispatch(createPokemon(pokemon));
            alert("Pokemon creado sattifacctoriamiente");
        } else {
            alert("Formulario con errores");
        }
    }




    return (
        <div>
            <Navbar/>
            <h2 className={style.addpokemon_title}>Nuevo Pokemon</h2>

            <form className={style.addpokemon_form} onSubmit={handleSubmit}>
                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={handleChange} value={pokemon.name}/>
                        {error.name && <p className={style.error}>{error.name}</p>}
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="type">Type:</label>
                        <input type="text" name="type" id="type" onChange={handleChange} value={pokemon.type}/>
                        {/* <select name="type" id="type" onChange={handleChange} value={pokemon.type}>
                            <option value="-1">Select a type</option>
                            {types.map((type) => (
                                <option key={type.id} value={type.name}>{type.name}</option>
                            ))}
                        </select> */}
                        {error.type && <p className={style.error}>{error.type}</p>}
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="image">Image:</label>
                        <input type="text" name="image" id="image" placeholder="https://pokemon.com/charmaleon.png" onChange={handleChange} value={pokemon.image}/>
                        {error.image && <p className={style.error}>{error.image}</p>}
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="life">Life:</label>
                        <input type="number" name="life" id="life" min="1" max="100" onChange={handleChange} value={pokemon.life}/>
                        {error.life && <p className={style.error}>{error.life}</p>}
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="attack">Attack:</label>
                        <input type="number" name="attack" id="attack" min="1" max="100" onChange={handleChange} value={pokemon.attack}/>
                        {error.attack && <p className={style.error}>{error.attack}</p>}
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="defense">Defense:</label>
                        <input type="number" name="defense" id="defense" min="1" max="100" onChange={handleChange} value={pokemon.defense}/>
                        {error.defense && <p className={style.error}>{error.defense}</p>}
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="speed">Speed:</label>
                        <input type="number" name="speed" id="speed" min="1" max="100" onChange={handleChange} value={pokemon.speed}/>
                        {error.speed && <p className={style.error}>{error.speed}</p>}
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="height">Height:</label>
                        <input type="number" name="height" id="height" min="1" max="100" onChange={handleChange} value={pokemon.height}/>
                        {error.height && <p className={style.error}>{error.height}</p>}
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="weight">Weight:</label>
                        <input type="number" name="weight" id="weight" min="1" max="100" onChange={handleChange} value={pokemon.weight}/>
                        {error.weight && <p className={style.error}>{error.weight}</p>}
                    </div>
                </div>

                <button type="submit">Guardar</button>
                <Link to="/home">Go to Home</Link>
            </form>
        </div>
    );
};


export default Create;
