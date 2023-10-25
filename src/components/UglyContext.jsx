import React, {useState, useEffect} from "react"
const UglyContext = React.createContext()
function UglyContextProvider(props){
    const [ugly, setUgly] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })
    const [uglyThing, setUglyThing]  = useState([])
    const [showForm, setShowForm] = useState(false)
    function fetchData(){
        fetch("https://api.vschool.io/jackgypsybaker/thing/")
        .then(res=> res.json())
        .then(data=> {
            setUglyThing(data)})
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    }, [])
    return (
        <UglyContext.Provider value={{
            uglyThing: uglyThing,
            showForm: showForm,
            setShowForm: setShowForm,
            setUglyThing: setUglyThing,
            ugly: ugly,
            fetchData: fetchData
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}
export {UglyContext, UglyContextProvider}