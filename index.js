const express = require("express")
const app = express()

require("dotenv").config()
const port = process.env.PORT || 3000
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => res.render("index"))







app.listen(port, () => console.log(`listening at port : ${port}`))








