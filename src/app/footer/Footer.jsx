import React from "react";
import style from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <p>© {new Date().getFullYear()} Star Wars Fan Page</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
