import React, {useEffect, useState, useContext} from "react"
const MusicContext = React.createContext()
function MusicContextProvider(props){
    const [auth, setAuth] = useState({})
    const authUrl = "https://api.soundcloud.com/connect?client_id=sleepless_dead_music&redirect_uri=https%3A%2F%2Fsoundcloud.com%2Fjack_gypsy_p&response_type=code&state=sleepless_dead_songs"
    function getAuth(){
        fetch(authUrl,
        {
            headers: {
                'accept: application/json; charset=utf-8':
                'Authorization: OAuth jack_gypsy_p'
            }
        })
        .then(res=> res.json())
        .then(data=> setAuth(data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        getAuth()
    }, [])
    return (
        <MusicContext.Provider value={{
            authUrl,
            getAuth,
        }}>
            {props.children}
        </MusicContext.Provider>
    )
}
export {MusicContext, MusicContextProvider}
