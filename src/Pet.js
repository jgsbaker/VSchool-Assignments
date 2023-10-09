import React from "react"
export default function Pet(props){
    const petName = props.pets.petName
    const breed = props.pets.breed
    return (
        <div key={props.id}> 
            <h5>pet name: {petName}, breed: {breed}</h5>
        </div>
    )
}