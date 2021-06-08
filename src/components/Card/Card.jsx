import React from "react";

const Card = (props) => {
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <img src={props.image} alt="profile" />
            <p>Name: {props.name}</p>
        </div>
    )
}

export default Card