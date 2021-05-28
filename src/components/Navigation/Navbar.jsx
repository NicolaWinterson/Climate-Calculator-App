import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar"
import BurgerIcon from "./BurgerIcon"
import {
    NavLink
} from "react-router-dom";
import "./styles.css";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <BurgerIcon open={open} onClick={() => setOpen(!open)}/>
             {open ? <MobileNavbar /> : null}
            <ul className="navbar">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="about" activeClassName="active">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;