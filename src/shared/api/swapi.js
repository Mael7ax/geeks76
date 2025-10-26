// src/shared/api/swapi.js

import axios from "axios";

// 🧱 Базовая настройка клиента
export const api = axios.create({
    baseURL: "https://swapi.dev/api",
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error("[SWAPI ERROR]", error.message);
        return Promise.reject(error);
    }
);

export const swapi = {

    getPlanets: (page = 1) => api.get(`planets/?page=${page}`),
    getPlanet: (id) => api.get(`planets/${id}/`),

    getFilms: () => api.get("films/"),
    getFilm: (id) => api.get(`films/${id}/`),

};