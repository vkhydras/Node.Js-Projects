const express = require('express')
const {getPost,createPost} = require('../controllers/post')
const router = express.Router()
const validator = require('../validator')


router.get('/',getPost)
router.post('/post',validator.createPostValidator, createPost)

module.exports=router
    
