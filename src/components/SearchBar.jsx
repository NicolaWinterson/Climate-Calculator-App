import React from "react";

const SearchBar = (props) => {
    return (
        <div>
                <input placeholder={props.placeholder}></input>
                <button>Search</button>
        </div>
    )
}

export default SearchBar