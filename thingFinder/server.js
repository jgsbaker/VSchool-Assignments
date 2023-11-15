const express = require("express")
const uuid = require("uuid").v4
const app = express()
const iceCream = [
    { name: "Bacon", _id: uuid()},
    {name: "Banana", _id: uuid()},
    {name: "Beer", _id: uuid()},
    {name: "Biscuit Tortoni", _id: uuid()},
    {name: "Black raspberry", _id: uuid()},
    {name: "Blue moon", _id: uuid()},
    {name: "Bubblegum", _id: uuid()},
    {name: "Butter Brickle", _id: uuid()},
    {name: "Butterscotch", _id: uuid()},
    {name: "Butter pecan", _id: uuid()},
    {name: "Carrot", _id: uuid()},
    {name: "Cheese", _id: uuid()},
    {name: "Cake batter", _id: uuid()},
    {name: "Cherry", _id: uuid()},
    {name: "Chocolate", _id: uuid()},
    {name: "Chocolate chip cookie dough", _id: uuid()},
    {name: "Coffee", _id: uuid()},
    {name: "Cinnamon apple", _id: uuid()},
    {name: "Cookies and cream", _id: uuid()},
    {name: "Cotton candy", _id: uuid()},
    {name: "Crab", _id: uuid()},
    {name: "Creole cream cheese", _id: uuid()},
    {name: "Dulce de leche", _id: uuid()},
    {name: "Earl Grey", _id: uuid()},
    {name: "Eggnog", _id: uuid()},
    {name: "French vanilla", _id: uuid()},
    {name: "Garlic", _id: uuid()},
    {name: "Goody Goody Gum Drops", _id: uuid()}, 
    {name: "Grape", _id: uuid()},
    {name: "Green tea", _id: uuid()},
    {name: "Halva", _id: uuid()},
    {name: "Hokey pokey", _id: uuid()},
    {name: "Lucuma", _id: uuid()},
    {name: "Mamey", _id: uuid()},
    {name: "Mango", _id: uuid()},
    {name: "Maple", _id: uuid()},
    {name: "Mint chocolate chip", _id: uuid()},
    {name: "Moon mist", _id: uuid()},
    {name: "Moose tracks", _id: uuid()},
    {name: "Neapolitan", _id: uuid()},
    {name: "Oyster", _id: uuid()},
    {name: "Pistachio", _id: uuid()},
    {name: "Peanut butter", _id: uuid()},
    {name: "Pumpkin", _id: uuid()},
    {name: "Raspberry ripple", _id: uuid()},
    {name: "Rose", _id: uuid()},
    {name: "Rum raisin", _id: uuid()},
    {name: "Spumoni", _id: uuid()},
    {name: "Strawberry", _id: uuid()},
    {name: "Strawberry cheesecake", _id: uuid()},
    {name: "Superman", _id: uuid()},
    {name: "Teaberry", _id: uuid()},
    {name: "Tiger tail", _id: uuid()},
    {name: "Tutti frutti", _id: uuid()},
    {name: "Twist", _id: uuid()},
    {name: "Ube", _id: uuid()},
    {name: "Vanilla", _id: uuid()},
    {name: "Watermelon", _id: uuid()},
]
app.use(express.json())
app.get("/",(req, res)=>{
    res.send(iceCream)
})
app.get("/:id", (req, res) => {
    const findId = iceCream.find(iceCream=> iceCream._id === req.params.id)
    console.log(findId);
})
app.post("/icecream", (req, res)=>{
    const newIceCream = req.body
    newIceCream._id = uuid()
    res.send(newIceCream)
    res.send(`Successfully added ${newIceCream}`)
})

app.listen(6000, ()=>{
    console.log("Server Running.")
})