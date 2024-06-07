const express = require("express")
require("dotenv").config()
const mongoose = require("mongoose")
const cors = require("cors")
mongoose.connect(process.env.MONGO_URL)

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/todos", require("./routes/todo.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: "server error", err: err.message })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING"))
})

