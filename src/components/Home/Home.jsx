import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import Navbar from "../Navigation/Navbar"
import Card from "../Card/Card"
import "./styles.css"

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home__background">
                <div className="home__top"><h1 className="home__heading">Hej and welcome to HOME</h1></div>
                <div className="home__content">
                    <SearchBar placeholder={"Search..."} />
                    <Card />
                </div>
                
            </div>
            
        </div>
    )
}

export default Home