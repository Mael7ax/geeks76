import {Suspense} from "react";
import {Outlet} from "react-router-dom";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
    return (
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Suspense>
        </>
    )
}
export default Layout;