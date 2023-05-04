import React from "react";
import { Link } from "react-router-dom";

import style from "./notFound.module.css";

const NotFound = () => {
    return (
        <div className={style.notfound}>
            <h1>404 Not Found</h1>
            <Link to="/home">&lt;- Go to Home</Link>
        </div>
    )
};


export default NotFound;
