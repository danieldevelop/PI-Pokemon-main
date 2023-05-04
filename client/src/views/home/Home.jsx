import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPokemons, getByName } from "../../redux/actions";

import Navbar from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";

const Home = () => {
    const dispatch = useDispatch();
    const allPokemons = useSelector((state) => state.allPokemons);

    // Traemos todos los pokemons
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);


    // Filtramos los usuarios por nombre (filtrado por backend)
    const [search, setSearch] = useState("");
    const handleChange = (evt) => {
        evt.preventDefault(); // Para que no se recargue la página
        setSearch(evt.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(getByName(search));
    };

    return (
        <div>
            <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Cards allPokemons={allPokemons} />
        </div>
    )
};


export default Home;
