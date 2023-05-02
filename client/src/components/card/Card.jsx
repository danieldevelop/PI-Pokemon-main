import React from 'react';
import { Link } from 'react-router-dom';

import style from './card.module.css';

const Card = ({ pokemon }) => {
    const { id, image, name, types} = pokemon;

    return (
        <div className={style.card_container}>

            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} className={style.card_image}/>
                <p className={style.card_name}>{name}</p>
            </Link>

            <section className={style.card_types}>
                <p>Types:</p>
                <ul className={style.card_type}>
                    { types.map((type, index) => <li key={index}>{type}</li> ) }
                </ul>
            </section>

        </div>
    )
};


export default Card;
