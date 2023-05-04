import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getById } from "../../redux/actions";

import style from "./detail.module.css";


const Detail = (props) => {
    const dispatch = useDispatch();
    const detailPokemon = useSelector((state) => state.detailPokemon);
    const { name, image, types } = detailPokemon;
    console.log(types);

    // Treamos el detalle del pokemon segun su id
    const id = props.match.params.id;
    useEffect(() => {
        dispatch(getById(id)); // props.match.params.id
    }, [dispatch, id]);


    return (
        <div>
            {
                (detailPokemon.id) ? <div>
                    <h2>{name}</h2>
                    <img src={image} alt={name} />
                    <h3>Types:</h3>
                    <ul>
                        {types?.map((type, index) => {
                            return (
                                <li key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</li>
                            );
                        })}
                    </ul>
                </div>
                : <h3>Error, el pokemon con id {id} no fue encontrado</h3>
            }

            <Link to="/home"> &lt;- Go to Home</Link>
        </div>
    )
};


export default Detail;
