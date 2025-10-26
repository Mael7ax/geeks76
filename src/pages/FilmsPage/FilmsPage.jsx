import React, { useEffect, useState } from "react";
import { swapi } from "../../shared/api/swapi.js";
import FilmsCard from "../../entities/Films/FilmsCard.jsx";
import style from './films.module.scss';

export const FilmsPage = ({ page = 1 }) => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const data = await swapi.getFilms(page);
                setFilms(data.results || []);
            } catch (error) {
                console.error("Ошибка при загрузке фильмов:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFilms();
    }, [page]);

    if (loading) return <p className={style.loading}>Загрузка...</p>;
    if (films.length === 0) return <p className={style.notFound}>Фильмы не найдены</p>;

    return (
        <div className={style.filmsContainer}>
            {films.map(film => (
                <FilmsCard
                    key={film.episode_id}
                    id={film.episode_id}
                    title={film.title}
                    releaseDate={film.release_date}
                    openingCrawl={film.opening_crawl}
                />
            ))}
        </div>
    );
};
