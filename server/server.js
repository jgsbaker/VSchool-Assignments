let express = require("express")
const app = express()
app.use(express.json())
const uuid =require("/home/jackgypsybaker/code/vschool/level5/server/node_modules/uuid/dist/v4.js")
app.get("/", (req, res)=>{
    res.send("Hello World")
})
app.get("/users", (req, res)=>{
    res.send([
        {name: "Bob", age: 60, _id: uuid()},
        {name: "Billy", age: 65, _id: uuid()},
        {name: "Rick", age: 88, _id: uuid()},
        {name: "Morty", age: 15, _id: uuid()}
    ])
})
app.post("/users", ()=>{
    res.post({name: "Sam", age: 14, _id: uuid()})
    console.log(req)
})
app.listen(9000, ()=>{
    console.log("The Server is running.")
})