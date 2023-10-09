import React from "react"
export default function BlogPost(){
    return(
        <div>
            <h2>{props.item.title}</h2>
            <h4>{props.item.subtitle}</h4>
            <p>Posted by {props.item.author} on {props.item.date}</p>
        </div>
    )
}