const express = require('express')
const router = express.Router()

const AuthCtrl = require('../controllers/auth')

const ThreadsCtrl = require('../controllers/threads')
router.post('', AuthCtrl.onlyAuthUser, ThreadsCtrl.createThread)

router.get('', ThreadsCtrl.getThreads)

module.exports = router
