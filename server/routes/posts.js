const express = require('express')
const router = express.Router()
const AuthCtrl = require('../controllers/auth')

const PostsCtrl = require('../controllers/posts')
router.post('', AuthCtrl.onlyAuthUser, PostsCtrl.createPost)

router.get('', PostsCtrl.getPosts)

module.exports = router
