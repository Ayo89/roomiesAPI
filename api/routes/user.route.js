const router = require('express').Router()

const { 
  createUser, 
  getAllUsers, 
  updateUser, 
  getOneUser, 
  deleteUser, 
  selfDelete, 
  selfUpdate 
} = require('../controllers/user.controller')

const { checkAdmin } = require('../middlewares/auth')

router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.put('/profile/:id', selfUpdate)
router.delete('/:id', deleteUser)
router.delete('/profile', selfDelete)

module.exports = router