import './App.css';
import Layout from "./components/Layout/Layout";
import React, {Fragment} from "react";
import Header from "./components/Header/Header";
import Routers from "./routers/Routers";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <Fragment>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </Fragment>
    );
}
