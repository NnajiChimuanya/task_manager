const express = require("express")
const app = express()
const taskRouter = require("./controller/task")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require("dotenv").config()
const port = process.env.PORT || 3000
app.set("view engine", "ejs")
app.use(express.static("public"))

app.use(methodOverride('_method'))





app.use("/", taskRouter)



app.listen(port, () => console.log(`listening at port : ${port}`))








