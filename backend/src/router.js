const express = require('express');
const { getAll } = require('./models/tasksModelo');
const router = express.Router();
const taskConstroller = require('./controllers/taskcontroller')



router.get('/', (req, res) => {res.status(404).json({ mensagem: 'Não há nada nesta página.' })});
router.get('/tasks', taskConstroller.getAll);
router.get('/tasks/:idTask', taskConstroller.getOne)
router.post('/tasks', taskConstroller.createTaskController)


router.put('/tasks/:idTask', taskConstroller.atttaskstatus)




module.exports = router