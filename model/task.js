const mongoose = require("mongoose")

const taskUser = new mongoose.Schema({
    name : {
        type: String,
        require : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

const Tasks = mongoose.model("Tasks", taskUser)

module.exports = Tasks