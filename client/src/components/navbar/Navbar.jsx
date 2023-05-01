import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

import style from "./navbar.module.css";


const Navbar = () => {
    return (
        <nav className={style.bar}>
            <div className={style.container}>

                <section className={style.bar_collap}>
                    <Link to="/" className={style.bar_brand}><img src={logo} alt="logo" /></Link>

                    <ul className={style.menu}>
                        <li className={style.menu_item}><Link to="/home" className={style.menu_link}>Home</Link></li>
                        <li className={style.menu_item}><Link to="/about" className={style.menu_link}>About mí</Link></li>
                        <li className={style.menu_item}><Link to="/add-pokemon" className={style.menu_link}>Create Pokemon</Link></li>
                    </ul>


                    <form className={style.form_menu}>
                        <input type="search" placeholder="Search" />
                        <button type="button">Search</button>
                    </form>

                </section>
            </div>
        </nav>
    )
};


export default Navbar;
