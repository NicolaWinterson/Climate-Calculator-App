import React from "react";
import Checkboxes from "../Checkboxes/Checkboxes"
import "./styles.css"

const SearchBar = (props) => {

    return (
        <>
            <input className="search__input" placeholder={props.placeholder} value={props.value} onSubmit={props.onSubmit}></input>
            <Checkboxes />
            <button onSubmit={props.onSubmit}></button>
        </>
    )
}

export default SearchBar