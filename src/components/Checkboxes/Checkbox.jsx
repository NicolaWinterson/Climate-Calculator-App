import React from 'react';
import "./styles.css"

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => {
    console.log("Checkbox: ", name, checked);

  return (<input className="checkbox" type={type} name={name} checked={checked} onChange={onChange} /> )
}
export default Checkbox;