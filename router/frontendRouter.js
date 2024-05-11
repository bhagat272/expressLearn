const router = require("express").Router();
const Emp = require("../models/Emp");

const axios = require('axios');

const cors = require('cors')
router.use(cors())
router.get("/home", (req, res) => {
  res.render("home.ejs");
});
router.get("/about", (req, res) => {
  res.render("about.ejs");
});
router.get("/", (req, res) => {
  res.send("welcome to server");
});
router.get("/insertform",(req,res)=>{
  res.render("form.ejs")
})
router.post("/insertform",(req,res)=>{
  const {ename,esal,edoj,edep} = req.body
  const record = new Emp({name:ename,department:edep,salary:esal,doj:edoj})
  record.save()
  res.render("form.ejs") 
  console.log(record)
})

router.get("/name:slug",(req,res)=>{
  res.send(`Hello ${req.params.slug} welcome to server`)
})
router.get("/data", (req, res) => {
  const apidata = [
    {
      name: "sumit",
      salary: 19999,
      location: "jaipur"
    },
    {
      name: "laxit",
      salary: 19999,
      location: "jaipur"
    },
    {
      name: "Rahul singh",
      salary: 2000,
      location:"jaipur" 
    }
  ];
  res.send(apidata);
}); 

router.post("/fetch",(req,res)=>{
   console.log(req.body)
  res.send("form")
})
const mydata = []
router.post("/appdata",(req,res)=>{
  console.log(req.body)
  mydata.push(req.body)
  res.send("Recieved Data")
})
router.get("/mydata",(req,res)=>{
  res.send(mydata)
})

module.exports = router;
