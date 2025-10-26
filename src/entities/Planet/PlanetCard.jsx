import React, { useEffect, useState } from "react";
import { swapi } from "../../shared/api/swapi.js";
import style from './planetCard.module.scss'

const PlanetCard = ({ id  }) => {
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const data = await swapi.getPlanet(id);
                setPlanet(data);
            } catch (error) {
                console.error("Ошибка при загрузке планеты:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanet();
    }, [id]);

    if (loading) return <p>Загрузка...</p>;
    if (!planet) return <p>Фильм не найден</p>;

    return (
        <div className={style.card}>
            <h2>{planet.name}</h2>
            <p>Эпизод: {planet.climate}</p>
            <p>Дата выхода: {planet.population}</p>
        </div>

);
};

export default PlanetCard;
