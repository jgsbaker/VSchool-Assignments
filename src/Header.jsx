import React from "react"
import Contact from "./Contact"
export default function Header(){
    function handleClick(){
        return (
            <Contact />
        )
    }
    return (
        <div>
            <h1>Jack Gypsy Baker Portfolio</h1>
            <h2>Full Stack Javascript, Audio/ Music Production, and Tech Support Services</h2>
            <button onClick={handleClick()}>Contact Now!</button>
            </div>
    )
}