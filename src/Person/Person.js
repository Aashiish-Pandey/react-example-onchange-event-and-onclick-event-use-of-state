import React from "react";
import "./Person.css"

const Person = (props) => {

return  (
    <div className = "Person">
        <p onClick = {props.click}>Hi, my name is {props.name} I am {props.age} years old </p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.changed}></input>
    </div>
)
}

export default Person