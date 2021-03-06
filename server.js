const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const multer = require("multer")
const cors = require("cors")

// get routes
const posts = require("./routes/api/posts.js")

const app = express()

app.use(cors())

//body-parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}))

// database config
const db = require("./config/keys").mongoURI;
//connect to mongo atlas database
mongoose.connect(db, {
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB has connected"))
  .catch(err => console.log(err));

// use routes
app.use("/api/posts", posts)

const port = process.env.PORT || 5000
app.listen(port, (err) => console.log("server is online running on port: " + port))