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
  checkManager 
} = require('../middlewares/auth')



router.get('/', getAllCommunities)
router.get('/profile', inviteUser)
router.get("/profile/users", getAllUsersByCommunity);
router.get('/:id', getOneCommunity)
router.post('/', createCommunityByAdmin)
router.post('/profile', createCommunity)
router.post('/profile/:communityId', joinCommunity)
router.put('/profile/:id', updateOneComunity)
router.delete('/:id', deleteOneCommunity)
router.delete('/profile/:id', removeUserFromCommunity)

router.post('/createCommunity', createCommunity)
router.post('/:id', updateOneComunity)
router.delete('/removeUser/:id', removeUserFromCommunity)

module.exports = router