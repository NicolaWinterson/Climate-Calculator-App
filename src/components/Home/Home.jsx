import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import Navbar from "../Navigation/Navbar"
import Card from "../Card/Card"
import "./styles.css"

const Home = () => {
    const [search, setSearch] = useState("");
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
                    console.error(error.message)
                }
            }

            );
    }
    useEffect(() => {
        getData()
    }, [])

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
      };

    return (
        <div>
            <Navbar />
            <div className="home__background">
                <div className="home__top"><h1 className="home__heading">Hej and welcome to HOME</h1></div>
                <div className="home__content">
                    <form onSubmit={getData}>
                        <SearchBar placeholder={"Search..."} onChange={updateSearch}  />
                    </form>
                                        
                    {typeof myJson !== undefined ? (
                        <Card 
                        title={data.company}
                        image={data.image}
                        name={data.name}
                        />
                    ) : (
                        ""
                    )}
            
                </div>

            </div>

        </div>
    )
}

export default Home