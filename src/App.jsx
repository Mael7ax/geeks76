import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Router.jsx"; // импортируем объект

function App() {
    return <RouterProvider router={router} />;
}

export default App;
