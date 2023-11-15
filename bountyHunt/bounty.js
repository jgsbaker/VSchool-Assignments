const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Bounty = new Schema({
        firstName: {
            type: String,
            required: true
        }, 
        lastName: {
            type: String,
            required: true
        }, 
        living: {
            type: Boolean,
            required: true
        }, 
        bountyAmount: {
            type: Number,
            required: true
        }, 
        type: {
            type: String,
            required: true
        },
    })
module.exports = mongoose.model("Bounty", Bounty)