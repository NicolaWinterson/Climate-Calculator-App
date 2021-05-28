import React from "react";
import SearchBar from "./SearchBar"
import Navbar from "./Navigation/Navbar"

const About = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Hej and welcome to HOME</h1>
            </div>
            <div>
                <SearchBar placeholder={"Search..."} />
            </div>
            <footer></footer>
        </div>
    )
}

export default About