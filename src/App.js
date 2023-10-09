import './App.css';
import React from "react"
function App(props) {
  const [inputValue, setInputValue] = React.useState("")
  const [names, setNames] = React.useState([])
  const listNames = names.map(input=> <h1>{input}</h1>)
  function handleClick(){
    setNames(prev=> [...prev, inputValue])
    setInputValue("")
    console.log(inputValue)
  } 
  function handleChange(event){
    setInputValue(event.target.value)
  }
  return (
    <div className="App">
      <input 
        type="text" 
        name="entry" 
        id="entry" 
        onChange={handleChange}
        value={inputValue}
        />
      <button onClick={handleClick}>submit</button>
      {listNames}
    </div>
  )
}
export default App;
