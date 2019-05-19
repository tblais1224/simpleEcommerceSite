const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json();

//multer is for image file uploading
var multer = require('multer')
var upload = multer({
    dest: '../../uploads/'
})

//get Post schema
const Post = require("../../models/Post.js")

//get posts validations
const validatePostInput = require("../../validations/post.js");

// @route     GET /api/posts/testing
// @desc     Tests get route
// @access      Public
router.get("/testing", (req, res) => {
    res.send("MY NAME IS MADDIE")
})


// @route   GET /api/posts
// @desc   get posts
// @access   Public
router.get("/", (req, res) => {
    //this finds posts and sorts them by the most recent date
    Post.find()
        .sort({
            date: -1
        })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json({
            error: "No posts could be found!"
        }));
});


// @route   GET /api/posts/:id
// @desc   get post by id
// @access   Public
router.get("/:id", (req, res) => {
    //this finds posts and sorts them by the most recent date
    Post.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err =>
            res.status(404).json({
                error: "No post found with that id!"
            })
        );
});


// @route   POST /api/posts
// @desc   Create a post
// @access   public
router.post("/", upload.single('avatar'), jsonParser, (req, res) => {

    const {
        errors,
        isValid
    } = validatePostInput(req.body);
    //check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

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