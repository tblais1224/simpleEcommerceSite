const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const multer = require("multer")

//get Post schema
const Post = require("../../models/Post.js")

//this is multer middleware that interacts with uploads folder to store images
app.use(multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename;
    },
}));

// @route     GET /api/posts/testing
// @desc     Tests get route
// @access      Public
router.get("/testing", (req, res) => {
    res.send("MY NAME IS MADDIE")
})

// @route   POST /api/posts
// @desc   Create a post
// @access   public
router.post("/", (req, res) => {

    

    const newPost = new Post({
        email: req.body.email,
        item: req.body.item,
        condition: req.body.condition,
        description: req.body.description,
        date: req.body.date,
        startingBid: req.body.startingBid,
        buyNow: req.body.buyNow,
        bidEndDate: req.body.bidEndDate,
        shippingCost: req.body.shippingCost,
        img: req.body.img
    })
    //save to db
    newPost.save().then(data => res.json(data))
})


module.exports = router