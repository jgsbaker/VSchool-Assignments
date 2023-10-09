const [color, setColor] = useState("pink")
setColor(prevColor => prevColor === "pink" ? "blue" : "pink")
const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])
setPeople(prevPeople => {
    return [
        ...prevPeople, 
        {
        firstName: "Billy Bob", 
        lastName: "Thornton"
        }
    ]
})
const [colors, setColors] = setState(["pink", "blue"])

setColors(prevColors => [...prevColors, "green"])
const [countObject, setCountObject] = setState({
	count: 0
})
setCountObject(prevSate=> count: prevState.count + 1)
const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith"
})
setPerson(prevState => ({
    ...prevState,
    age: 30
}))