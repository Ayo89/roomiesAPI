const router = require('express').Router()

const { 
  createExpense, 
  getAllExpenses, 
  updateExpense, 
  getOneExpense, 
  deleteExpense, 
  addExpense, 
  expensePaid, 
  getAllExpensesByCommunity
} = require('../controllers/expense.controller')

const { checkAdmin } = require('../middlewares/auth')

router.get('/', getAllExpenses)
router.get('/:id', getOneExpense)
router.get('/profile/expenses', getAllExpensesByCommunity)
router.post('/', createExpense)
router.post('/profile', addExpense)
router.put('/:id', updateExpense)
router.put('/profile/:id', expensePaid)
router.delete('/:id', deleteExpense)

module.exports = router