const express = require("express")
const app = express() 
const cors = require('cors'); 
app.use(express.urlencoded({extended:false}))
const frontend = require("./router/frontendRouter")
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/11node")
app.use(express.json())
app.use(cors())



app.use(frontend)
app.use(express.static("public"))
app.set('view engine','ejs')
app.listen(5000,()=>console.log("server is running on port 5000"))