const express = require('express');
const router = express.Router();

const { hiThere, createTask, getTask, deleteTask, updateTask, getAllTasks } = require('../controllers/task')

router.get('/', hiThere)
router.get('/tasks', getAllTasks)
router.post('/newtask', createTask)
router.get('/task/:id', getTask)
router.patch('/task/update/:id', updateTask)
router.delete('/task/delete/:id', deleteTask)

module.exports = router;