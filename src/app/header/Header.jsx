import React from "react";
import { NavLink } from "react-router-dom";
import style from './Header.module.scss';

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.logo}>Star Wars Universe</h1>
            <nav className={style.nav}>
                <NavLink
                    to="/films"
                    className={({ isActive }) => isActive ? style.active : ""}
                >
                    Films
                </NavLink>
                <NavLink
                    to="/planets"
                    className={({ isActive }) => isActive ? style.active : ""}
                >
                    Planets
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
