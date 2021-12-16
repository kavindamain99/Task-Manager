const Task = require('../models/task');


const hiThere = (req, res) => {
    res.send("<h1>404</h1>");
}

const createTask =async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res) => {
    res.send(req.params.id)
}
const getAllTasks = (req, res) => {
    res.send("hi There get all!");
}

const updateTask = (req, res) => {
    res.send("hi There !");
}

const deleteTask = (req, res) => {
    res.send("hi There !");
}




module.exports = {
    hiThere,
    createTask,
    getTask,
    getAllTasks,
    updateTask,
    deleteTask
}