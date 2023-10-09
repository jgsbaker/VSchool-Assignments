import React from "react"
import Pet from "./Pet"
import data from "./data"
export default function Friend(props){
    let pets = data.map((item)=> <Pet key={item.id} pets={item.pets}/>)
    return(
        <div key={props.id}>
            <h3  >Name: {props.name}, Age: {props.age}</h3>
            <div>Pets: {pets}</div>
        </div>
    )
}