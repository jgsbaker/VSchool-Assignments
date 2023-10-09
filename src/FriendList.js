import React from "react"
import Friend from "./Friend"
import data from "./data"
export default function FriendList(props){
    const friends = data.map(item=> <Friend
        key={item.id} 
        name={item.name}
        age={item.age}
        pets ={item.pets}
        />)
    return (
        <div>
            {friends}
        </div>
    )
}