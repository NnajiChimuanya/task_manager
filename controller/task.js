const express = require("express")
const Router = express.Router()
const mongoose = require("mongoose")

const Tasks = require("../model/task")

try {
    mongoose.connect("mongodb://localhost:27017/Tasks")
    console.log("Connection Successful")
} catch (error) {
    if(error) throw error
}


Router.get("/", (req, res) => {
    Tasks.find({}, (err, data) => {
        if(err) throw err
        res.render("index", {tasks : data})
    })
})

Router.post("/api/addTask", async (req, res, next) => {
    console.log(req.body)
    
    let newTask = new Tasks(req.body)

    newTask.save((err) => {
        if(err) throw err
    })

    res.redirect("/")

})



module.exports = Router
