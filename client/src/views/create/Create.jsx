import React from 'react';
import { Link } from 'react-router-dom';

import style from "./create.module.css";
import validate from "./validate";

import Navbar from "../../components/navbar/Navbar";


const Create = () => {
    return (
        <div>
            <Navbar/>
            <h2 className={style.addpokemon_title}>Nuevo Pokemon</h2>

            <form className={style.addpokemon_form}>
                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="type">Type:</label>
                        <select name="type" id="type">
                            <option value="-1">Seleccione</option>
                            <option value="t1">Type 1</option>
                            <option value="t2">Type 2</option>
                        </select>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="image">Image:</label>
                        <input type="text" name="image" id="image" placeholder="https://pokemon.com/charmaleon.png"/>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="life">Life:</label>
                        <input type="number" name="life" id="life"/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="attack">Attack:</label>
                        <input type="number" name="attack" id="attack"/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="defense">Defense:</label>
                        <input type="number" name="defense" id="defense"/>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.form_group}>
                        <label htmlFor="speed">Speed:</label>
                        <input type="number" name="spped" id="speed"/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="height">Height:</label>
                        <input type="number" name="height" id="height"/>
                    </div>
                    <div className={style.form_group}>
                        <label htmlFor="weight">Weight:</label>
                        <input type="number" name="weight" id="weight"/>
                    </div>
                </div>

                <button type="button">Guardar</button>
                <Link to="/home">Go to Home</Link>
            </form>
        </div>
    );
};


export default Create;
