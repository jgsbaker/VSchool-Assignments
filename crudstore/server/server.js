const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()
const port = process.env.port || 6000
const Product = require("../models/inventory")
app.use(express.json())
app.use(morgan("dev"))
// XpCfId2bUEENh3Ym
mongoose.connect("mongodb+srv://jgsbaker:XpCfId2bUEENh3Ym@cluster0.wbuwqvk.mongodb.net/?retryWrites=true&w=majority",)
.then(()=>console.log("Connected to MongoDB"))
.catch(err=>console.log(err))
app.get("/products", (req, res)=>
    Product.find()
    .then((products)=>{ 
        return res.status(200).send(products)
    })
    .catch(err=>{if(err) return res.status(500).send(err)})
)
app.get("/:id", (req, res)=>{
    const id = req.params.id
    Product.findById(id)
    .then(product=>{
        return res.json(product)
    })
    .catch(err=>{if(err) return res.status(500).send(err)})
})
app.post("/products", (req,res)=>{
    const newProduct = new Product(req.body)
    newProduct.save()
    .then(newProduct=>{    
        return res.status(200).send(newProduct)
    })
    .catch(err=>{if(err) return res.status(500).send(err)})
})
app.delete("/:id", (req, res)=>{
    const id = req.params.id
    Product.findByIdAndDelete(id)
    .then(response=>{
        const message = `Product with id ${req.params.id} deleted`
        return res.status(200).send(message)
    })
    .catch(err=>{if(err) return res.status(500).send(err)})
})
app.put("/:id", (req, res, next)=>{
    const id = req.params.id
    Product.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true})
    .then((updatedProduct)=>{  
        return res.status(201).send(updatedProduct)
    })
    .catch(err=>{
        if(err){ 
            return res.status(500)
            .next(err)
        }
    })
})
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})