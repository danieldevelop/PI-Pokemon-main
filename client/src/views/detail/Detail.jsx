import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getById } from "../../redux/actions";
import Navbar from "../../components/navbar/Navbar";

import style from "./detail.module.css";


const Detail = () => {
    const { id } = useParams(); // id del pokemon que viene por url
    const dispatch = useDispatch();
    
    // Treamos el detalle del pokemon segun su id
    useEffect(() => {
        dispatch(getById(id)); 
    }, [dispatch, id]);
    
    const detailPokemon = useSelector((state) => state.detailPokemon);
    console.log("detailPokemon: ", detailPokemon);


    return (
        <div className={style.detail_pokemon}>
            <Navbar />
            <h1 className={style.detail_title}>Detalle y Especificaciones</h1>
            
            <div className={style.detail_content}>
                {
                    (detailPokemon.id) 
                    ? <article className={style.detail_info}>
                        <h2>{detailPokemon.name}</h2>

                        <p>ID: {detailPokemon.id}</p>
                        <p>life: {detailPokemon.life}</p>
                        <p>attack: {detailPokemon.attack}</p>
                        <p>defense: {detailPokemon.defense}</p>
                        <p>speed: {detailPokemon.speed}</p>
                        <p>height: {detailPokemon.height}</p>
                        <p>weight: {detailPokemon.weight}</p>
                        <h3>Types:</h3>
                        <ul>
                            {detailPokemon.types?.map((type, index) => {
                                return (
                                    <li key={index}>{type.charAt(0).toUpperCase() + type.slice(1)}</li>
                                );
                            })}
                        </ul>
                    </article> 
                    : <h3 style={{
                            "textAlign": "center", 
                            "color": "#fff", 
                            "width": "fit-content", 
                            "backgroundColor": "#247BC5",
                            "padding": "10px",
                            "borderRadius": "5px",
                            "margin": "0 auto",
                            "fontWeight": "500"
                        }}>
                        Error, el pokemon con id {id} no fue encontrado
                    </h3>
                }

                <section className={style.detail_img}>
                    <img src={detailPokemon.image} alt={detailPokemon.name} />
                </section>
            </div>
            

            {/* <Link to="/home"> &lt;- Go to Home</Link> */}
        </div>
    )
};


export default Detail;
