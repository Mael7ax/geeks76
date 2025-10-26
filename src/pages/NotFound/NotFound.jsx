import React from "react";
import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

const NotFound = () => {
    return (
        <div className={style.notFound}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Link to="/films" className={style.link}>Вернуться на главную</Link>
        </div>
    );
};

export default NotFound;
