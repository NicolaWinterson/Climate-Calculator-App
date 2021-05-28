import React from "react";
import {
    Link
} from "react-router-dom";
import "./styles.css";

const MobileNavbar = () => {
    return (
        <ul className="navbar--mobile">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    )
}

export default MobileNavbar;