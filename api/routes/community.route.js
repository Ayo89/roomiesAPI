const router = require('express').Router()

const { 

  createCommunity, 
  getAllCommunities, 
  getOneCommunity, 
  deleteOneCommunity, 
  updateOneComunity, 
  removeUserFromCommunity, 
  createCommunityByAdmin, 
  inviteUser, 
  joinCommunity,
  getAllUsersByCommunity
} = require('../controllers/community.controller')

const { 
  checkAdmin, 
  checkManager 
} = require('../middlewares/auth')



router.get('/', checkAdmin, getAllCommunities)
router.get('/profile', checkManager, inviteUser)
router.get("/profile/users", getAllUsersByCommunity);
router.get('/:id', checkAdmin, getOneCommunity)
router.post('/', checkAdmin, createCommunityByAdmin)
router.post('/profile', createCommunity)
router.post('/profile/:communityId', joinCommunity)
router.put('/profile/:id', checkManager, updateOneComunity)
router.delete('/:id', checkAdmin, deleteOneCommunity)
router.delete('/profile/:id', checkManager, removeUserFromCommunity)

router.post('/createCommunity', createCommunity)
router.post('/:id', checkManager, updateOneComunity)
router.delete('/removeUser/:id', checkManager, removeUserFromCommunity)

module.exports = router