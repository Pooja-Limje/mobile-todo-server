const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: { type: String, requred: true },
    desc: { type: String, requred: true },
    complete: { type: Boolean, default: false },
})

module.exports = mongoose.model("notes", todoSchema)