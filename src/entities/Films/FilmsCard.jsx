import React, { useEffect, useState } from "react";
import { swapi } from "../../shared/api/swapi.js";
import style from './filmsCard.module.scss'

const FilmsCard = ({ id, title, releaseDate, openingCrawl }) => {
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const data = await swapi.getFilm(id);
                setFilm(data);
            } catch (error) {
                console.error("Ошибка при загрузке фильма:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFilm();
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (!film) return <p>Фильм не найден</p>;

    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <h2>{title}</h2>
                <span>Episode {id}</span>
            </div>
            <p className={style.releaseDate}>Release: {releaseDate}</p>
            <p className={style.opening}>{openingCrawl.substring(0, 150)}...</p>
        </div>
    );
};

export default FilmsCard;

