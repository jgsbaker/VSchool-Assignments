import React from "react"
import "./index.css"
export default function Squares(props){
    return (
        <main className="box">
            <div className="box" key={props.id} id={props.id}></div>
        </main>
    )
}