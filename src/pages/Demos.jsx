import React, {useState, useContext} from "react";
import { MusicContext } from "./components/MyContext";
export default function Demos(){
    const {getAuth} = useContext(MusicContext)
    const [tracks, setTracks] = useState([])
    const getTracks = () =>{
        fetch('https://api.soundcloud.com/me/tracks?limit=5&linked_partitioning=true',
        {Header: 'accept: application/json; charset=utf-8' ,
        Header: 'Authorization: OAuth jack_gypsy_p'})
        .then(res=>res.json())
        .then(data=>{
            getAuth()
            setTracks(data)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getTracks()
    }, [])
    return (
        <>
            <div>{getTracks}</div>
        </>
    )
}