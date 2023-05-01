import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <div>
            <h1>!Bievenido a Pokemon GO!</h1>
            <p>Encuentra a todos tus personajes aquí...</p>

            <Link to="/home">Go to home</Link>
        </div>
    )
}



export default Landing;