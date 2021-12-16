const Task = require('../models/task');


const hiThere = (req, res) => {
    res.send("<h1>404</h1>");
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const getTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        //also we can use findbyid
        const task = await Task.findOne({_id: taskId});
        if (!task) {
            res.status(404).json({ msg: 'Task not found' })
        } else {

            res.status(201).json({ task })
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateTask = async (req, res) => {
    const taskId = req.params.id;

    try {
        const task = await Task.findOneAndUpdate({_id: taskId},req.body,{
            //return updated value and run mongoose validaters 
            //we defined on model
            new:true,
            runValidators: true
        });
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async(req, res) => {
    const taskId = req.params.id;
    try {
        //also we can use findbyid
        const task = await Task.findOneAndDelete({_id: taskId});
        if (!task) {
            res.status(404).json({ msg: 'Task not found' })
        } else {

            res.status(201).json({ task })
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}




module.exports = {
    hiThere,
    createTask,
    getTask,
    getAllTasks,
    updateTask,
    deleteTask
}