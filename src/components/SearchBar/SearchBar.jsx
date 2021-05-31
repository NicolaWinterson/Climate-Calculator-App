import React, {useEffect, useState} from "react";
import "./styles.css"

const SearchBar = (props) => {
    /* const [data, setData] = useState([]);
    const getData=()=>{
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
      useEffect(()=>{
        getData()
      },[])
 */

    return (
        <>
            <input className="search__input" placeholder={props.placeholder}></input>
        </>
    )
}

export default SearchBar