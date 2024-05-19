const Emp = require("../models/Emp");
const express = require("express");

exports.getHome = (req, res) => {
  res.render("home.ejs");
};

exports.getAbout = (req, res) => {
  res.render("about.ejs");
};

exports.getWelcome = (req, res) => {
  res.send("welcome to server");
};

exports.getInsertForm = (req, res) => {
  res.render("form.ejs");
};

exports.postInsertForm = async (req, res) => {
  const { ename, esal, edoj, edep } = req.body;
  const record = new Emp({
    name: ename,
    department: edep,
    salary: esal,
    doj: edoj,
  });
  try {
    await record.save();
    res.render("form.ejs");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving record");
  }
};

exports.getName = (req, res) => {
  res.send(`Hello ${req.params.slug} welcome to server`);
};

exports.getData = (req, res) => {
  const apidata = [
    {
      name: "sumit",
      salary: 19999,
      location: "jaipur",
    },
    {
      name: "laxit",
      salary: 19999,
      location: "jaipur",
    },
    {
      name: "Rahul singh",
      salary: 2000,
      location: "jaipur",
    },
  ];
  res.send(apidata);
};

exports.postFetch = (req, res) => {
  console.log(req.body);
  res.send("form");
}; // Initialize mydata array outside the route handler
const mydata = [];

exports.postAppData = async(req, res) => {
  const { confirmPassword , email , password } = req.body;
  mydata.push(req.body);
  console.log(req.body)
  res.send("Received Data");
};

exports.getMyData = (req, res) => {
  res.send(mydata);
};
