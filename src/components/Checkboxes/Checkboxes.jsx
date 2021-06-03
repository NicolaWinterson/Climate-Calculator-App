import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox"

export default function Checkboxes() {
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state

  const handleChange = (event) => {
    // updating an object instead of a Map
    setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
  }

  useEffect(() => {
    console.log("checkedItems: ", checkedItems);
  }, [checkedItems]);

  const checkboxes = [
    {
      name: 'check-box-1',
      key: 'checkBox1',
      label: 'Check Box 1',
    },
    {
      name: 'check-box-2',
      key: 'checkBox2',
      label: 'Check Box 2',
    },
    {
      name: 'check-box-3',
      key: 'checkBox3',
      label: 'Check Box 3',
    }
  ];


  return (
    <div>
      <lable>Is this foodstuff... {checkedItems["check-box-1"]} </lable> <br />
      {
        checkboxes.map(item => (
          <label key={item.key}>
            {item.name}
            <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange} />
          </label>
        ))
      }
    </div>
  );
}