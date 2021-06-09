import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar.jsx"
import Navbar from "../Navigation/Navbar"
import Card from "../Card/Card"
import "./styles.css"
import data from "../data/data.json"

const Home = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("vegan");

    useEffect(() => {

        const getResults = async () => {
            try {
                const DB = "../data/data.json"
                //console.log(URL);
                const response = await fetch(DB, {
                    mode: "cors",
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                });
                //console.log(response);
                const data = await response.json();
                console.log("response done, let's read the json");
                setResults(data.hits);
            } catch (error) {
                setError(error);
                console.log("it is broken");
                console.error(error.message);
            }
        };

        getResults();
        console.log("effect has been run");
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log(search);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    if (error) {
        return <div style={{ color: "red" }}>{error.message}</div>;
    }


    /*     const [search, setSearch] = useState("");
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
          }; */

    return (
        <div>
            <Navbar />
            <div className="home__background">
                <div className="home__top"><h1 className="home__heading">Hej and welcome to HOME</h1></div>
                <div className="home__content">
                    <form onSubmit={getSearch}>
                        <SearchBar placeholder={"Search..."} onChange={updateSearch} />
                    </form>
                    <div>
                   {/*      {typeof myJson !== undefined ? ( */}
                            {
                                results.map(results => (
                                    <Card
                                        key={results._id}
                                        title={results.name}
                                        image={results.picture}
                                    />
                                ))
                            }
                       

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home