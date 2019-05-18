const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()

// parse application/json
app.use(bodyParser.json())

//use params to access a page
app.get("/", (req, res) => {
    res.send("home page working")
})

const port = process.env.PORT || 5000
app.listen(port, (err) => console.log("server is online running on port: " + port))