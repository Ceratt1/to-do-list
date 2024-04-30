const express = require('express');
const { getAll } = require('./models/tasksModelo');
const router = express.Router();
const taskConstroller = require('./controllers/taskcontroller')



// router.get('/tasks', (req,res) => res.status(200).send('hii111'))
router.get('/tasks', taskConstroller.getAll)



module.exports = router