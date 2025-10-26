import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import { FilmsPage } from "../../pages/FilmsPage/FilmsPage.jsx";
import { PlanetPage } from "../../pages/PlanetPage/PlanetPage.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx"; // создайте страницу 404

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index:true, path: "films", element: <FilmsPage /> },
            { path: "planets", element: <PlanetPage /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);
