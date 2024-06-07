const Todo = require("../models/Todo")
const asyncHandler = require("express-async-handler")

exports.getAllTodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch success", result })
})
exports.addTodos = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "todo add success" })
})
exports.updateTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "todo update success" })
})
exports.deleteTodos = asyncHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: "todo delete success" })
})