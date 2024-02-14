const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express()

const BlogRoutes = require("./modules/blog/blog.routes")

app.use(cors());
app.use(express.json());
app.use(express.static("files"));
app.use(bodyParser.text({ type: "/" }));

app.use("/blog",BlogRoutes)

app.get('/',(req,res)=>{
    res.send("Works fine")
})
app.listen(5000,()=>{
  console.log("Server started at port 5000")
})
