import React, {useContext} from "react";
import {FaBars} from "react-icons/fa";
import {Appcontext, useGlobalContext} from "./context";
const Home = () => {
    const {openSidebar, openModal} = useGlobalContext();

    return (
        <main>
            <button type="" className="sidebar-toggle" onClick={openSidebar}>
                <FaBars />
            </button>
            <button type="" className="btn" onClick={openModal}>
                show Modal
            </button>
        </main>
    );
};

export default Home;
