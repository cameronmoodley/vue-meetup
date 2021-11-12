const express = require('express')
const router = express.Router()

const MeetupsCtrl = require('../controllers/meetups')
const AuthController = require('../controllers/auth')

router.get('', MeetupsCtrl.getMeetups)
router.get('/secret', AuthController.onlyAuthUser, MeetupsCtrl.getSecret)
router.get('/:id', MeetupsCtrl.getMeetupById)

module.exports = router
