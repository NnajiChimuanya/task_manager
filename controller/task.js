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

Router.get("/api/getTask/:id", (req, res) => {
    Tasks.findById({_id : req.params.id}, (err, data) => {
        if(err) throw err
        res.render("task", {task : data})
    })
})

Router.delete("/api/deleteTask/:id", (req, res) => {
    Tasks.findByIdAndDelete({_id : req.params.id}, (err) => {
        if(err) throw err
        console.log(`deleted ${req.params.id}`)
         res.redirect("/")
    })
   
})

Router.patch("/api/updateTask/:id", (req, res) => {
    let mm = false
    if(req.body.completed) {
         mm = true
    }
    Tasks.findByIdAndUpdate({_id : req.params.id},{name : req.body.name, completed : mm}, (err, data) => {
        if(err) throw err
        console.log(`Succeffuly update ${req.params.id}`)
        res.redirect("/")
    })
})

Router.post("/click", (req, res) => {
    console.log("checked")
})





module.exports = Router
