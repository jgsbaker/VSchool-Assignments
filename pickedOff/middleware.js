const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use((req,res, next)=>{
    console.log("Success!")
    next()
})
app.get((req, res, next)=>{
    console.log("get successful")
    next()
})
app.listen(port, ()=>{
    console.log(`Middleware is listening on port ${port}`)
})