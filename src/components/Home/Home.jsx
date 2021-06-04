import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import Navbar from "../Navigation/Navbar"
import Card from "../Card/Card"
import "./styles.css"

const Home = () => {
    const [value, setValue] = useState("")
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('../db/data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            }, (error) => {
                if (error) {
                    console.log("data not found")
                }
            }

            );
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="home__background">
                <div className="home__top"><h1 className="home__heading">Hej and welcome to HOME</h1></div>
                <div className="home__content">
                    <SearchBar placeholder={"Search..."} onChange={(value) => setValue(value)} onSubmit={getData} />
                    <Card />
                </div>

            </div>

        </div>
    )
}

export default Home