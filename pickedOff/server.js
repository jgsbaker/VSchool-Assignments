const express = require("express")
const uuid = require("uuid").v4
const app = express()
const appRouter = express.Router()
const port = process.env.port || 4000
app.use(express.json())
const data = [
    {name: "apple", _id: uuid()},
    {name: "strawberry", _id: uuid()},
    {name: "blackberry", _id: uuid()},
    {name: "raspberry", _id: uuid()},
    {name: "banana", _id: uuid()},
    {name: "watermelon", _id: uuid()}
]

app.get("/", (req,res)=>{
    res.send(data)
})
app.get("/:id", (req, res)=>{
    const newId = data.find(data=> data._id === req.params.id)
    res.send(newId)
})
app.listen(port, ()=>{
    console.log(`Listening to  port ${port}`)
})