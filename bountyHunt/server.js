const express = require("express")
const Bounty = require("./bounty")
const mongoose = require("mongoose")
const app = express()
const morgan = require("morgan")
const port = process.env.port || 7002
app.use(express.json())
app.use(morgan("dev"))
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://jgsbaker:XpCfId2bUEENh3Ym@cluster0.wbuwqvk.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser: true}
)
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err))
app.get("/bounties", (req, res, next)=>{
    Bounty.find((err, bounties)=>{
        if(err) return res.status(500).send(err)
        return res.json(bounties)
    })
})
app.get("/:id", (req, res, next)=>{
    const bountyId = req.params.id
    Bounty.findById(
        {_id: bountyId}, 
        (err,bounty)=>{
            if(err) return res.status(500).send(err)
            return res.json(bounty)
    })
})
app.post("/bounties", (req, res)=>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err, bounty)=>{
        if(err) return res.status(500).send(err)
        return res.status(200).send(bounty)
    })
})
app.put("/:id", (req,res, next)=>{
    const bountyId = req.params.id
    Bounty.findOneAndUpdate(
        {_id: bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) =>{
            if(err){
                return res.status(500)
                .send(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})
app.delete("/:id", (req,res)=>{
    const bountyId = req.params.id
    Bounty.findByIdAndDelete(
        {_id: bountyId},
        (err, response)=>{
            if(err) return res.status(500).send(err)
            response = `Bounty with id ${bountyId} has been deleted`
            return res.status(200).send(response)
        }
    )
})
app.listen(port, ()=>{
    console.log("The server is running")
})