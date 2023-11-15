const express = require("express")
const uuid = require("uuid").v4
const app = express()
const port = process.env.port || 4001
const appRouter = express.Router()
app.use(express.json())
const todos = [
    {
        name: "Some",
        description: "description",
        imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
        completed: false,
        _id: uuid()
    },
    {
        name: "Other",
        description: "description for other",
        imageUrl: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698969600&semt=sph",
        completed: false,
        _id: uuid()
    },
    {
        name: "testing",
        description: "testing description",
        imageUrl: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
        completed: false,
        _id: uuid()
    }
]
app.get("/", (req, res)=>{
    res.send(todos)
})
app.get("/:id", (req, res)=>{
    const todoId = req.params.id
    const findTodo = todos.find(todos=> todos._id === todoId)
    res.send(findTodo)
})
app.post("/", (req, res)=>{
    const newTodo = req.body
    newTodo._id = uuid()
    todos.push(newTodo)
    res.send(`${newTodo} added to database`)
})
app.put("/:id", (req, res)=>{
    const todoId = req.params.id
    const todoIndex = todos.findIndex(todos=> todos._id === todoId)
    const updateTodos = Object.assign(todos[todoIndex], req.body)
    res.send(updateTodos)
})
app.delete("/:id", (req, res)=>{
    const todoId = req.params.id
    const todoIndex = todos.findIndex(todos=>todos._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted!")
})
app.listen(port, ()=>{
    console.log(`Successfully runnning on port ${port}`)
})