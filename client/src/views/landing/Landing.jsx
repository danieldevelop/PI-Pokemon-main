import React from "react";
import { Link } from "react-router-dom";

import style from "./landing.module.css";

const Landing = () => {
    return (
        <section className={style.landing}>
            <div className={style.container}>

                <div className={style.landing_group}>
                    <h1 className={style.landing_title}>¡Bievenido a Pokemon GO!</h1>
                    <p className={style.landing_leyend}>Tus personajes favoritos aquí...</p>
                </div>

                <Link to="/home" className={style.landing_link}>Ingresar</Link>

            </div>    
        </section>
    )
}



export default Landing;