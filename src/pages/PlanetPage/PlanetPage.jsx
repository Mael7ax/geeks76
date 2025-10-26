import React, { useEffect, useState } from "react";
import { swapi } from "../../shared/api/swapi.js";
import PlanetCard from "../../entities/Planet/PlanetCard.jsx";
import style from "./PlanetPage.module.scss";

export const PlanetPage = ({ page = 1 }) => {
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const data = await swapi.getPlanets(page);
                setPlanets(data.results || []);
            } catch (error) {
                console.error("Ошибка при загрузке планет:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanets();
    }, [page]);

    if (loading) return <p className={style.loading}>Загрузка...</p>;
    if (planets.length === 0) return <p className={style.loading}>Планеты не найдены</p>;

    return (
        <div className={style.page}>
            <h1 className={style.title}>Планеты Вселенной</h1>
            <div className={style.grid}>
                {planets.map((planet) => {
                    const id = planet.url.split("/").filter(Boolean).pop();
                    return <PlanetCard id={id} key={id} name={planet.name} />;
                })}
            </div>
        </div>
    );
};
