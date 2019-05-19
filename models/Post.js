const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creates schema for posting items for sale
const PostSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    startingBid: {
        type: Number
    },
    buyNow: {
        type: Number
    },
    bidEndDate: {
        type: Date
    },
    shippingCost: {
        type: Number
    },
    img: {
        data: Buffer,
        contentType: String
    },
    bid: [{
        amount: {
            type: Number,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    }],
    comments: [{
        text: {
            type: String,
            required: true
        }
    }]
})

module.exports = Post = mongoose.model("post", PostSchema)