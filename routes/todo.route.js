const router = require("express").Router()

const todoController = require("./../controllers/todo.controller")

router
    .get("/", todoController.getAllTodos)
    .post("/", todoController.addTodos)
    .put("/:id", todoController.updateTodos)
    .delete("/:id", todoController.deleteTodos)

module.exports = router