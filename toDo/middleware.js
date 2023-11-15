const express = require("express")
const app = express()
const port = process.env.port || 4001
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded)
app.use(express.json())
app.use((req, res, next)=>{
    console.log("Success!")
    next()
})
app.get((req,res, next)=>{
    console.log("get successful")
    next()
})
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`)
})