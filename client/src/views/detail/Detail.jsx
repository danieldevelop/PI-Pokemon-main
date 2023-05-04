import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getById } from "../../redux/actions";
import Navbar from "../../components/navbar/Navbar";

import style from "./detail.module.css";


const Detail = (props) => {
    const dispatch = useDispatch();
    const detailPokemon = useSelector((state) => state.detailPokemon);
    const { name, image, types } = detailPokemon;


    // Treamos el detalle del pokemon segun su id
    const id = props.match.params.id;
    useEffect(() => {
        dispatch(getById(id)); // props.match.params.id
    }, [dispatch, id]);


    return (
        <div className={style.detail_pokemon}>
            <Navbar />
            <h1 className={style.detail_title}>Detalle y Especificaciones</h1>
            
            <div className={style.detail_content}>
                {
                    (detailPokemon.id) ? <article className={style.detail_info}>
                        <h2>{name}</h2>
                        <h3>Types:</h3>
                        <ul>
                            {types?.map((type, index) => {
                                return (
                                    <li key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</li>
                                );
                            })}
                        </ul>
                    </article> : <h3>Error, el pokemon con id {id} no fue encontrado</h3>
                }

                <section className={style.detail_img}>
                    <img src={image} alt={name} />
                </section>
            </div>
            

            {/* <Link to="/home"> &lt;- Go to Home</Link> */}
        </div>
    )
};


export default Detail;
