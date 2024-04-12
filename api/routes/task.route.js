const router = require('express').Router()

const { 
  createTask, 
  getAllTasks, 
  getOneTask, 
  updateTask, 
  deleteTask, 
  userAddTask, 
  taskCompleted, 
  getAllTasksByCommunity
} = require('../controllers/task.controller')

const { checkAdmin } = require('../middlewares/auth')

router.get('/:id', getOneTask)
router.get('/', getAllTasks)
router.get('/profile/tasks', getAllTasksByCommunity)
router.post('/', createTask)
router.post('/profile', userAddTask)
router.put('/:id', updateTask)
router.put('/profile/:id', taskCompleted)
router.delete('/:id', deleteTask)

module.exports = router