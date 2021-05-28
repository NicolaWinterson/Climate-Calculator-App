import React, {useEffect, useState} from "react";

const SearchBar = (props) => {
    const [data, setData] = useState([]);
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


    return (
        <div>
            <input placeholder={props.placeholder}></input>
            <button>Search</button>
            <div>
                {data && data.length>0 && data.map((item)=><p>{item.about}</p>)}
            </div>
        </div>
    )
}

export default SearchBar