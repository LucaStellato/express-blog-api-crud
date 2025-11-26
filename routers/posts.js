const express = require('express')
const router = express.Router();
const posts = require('../posts')
const postController = require('../controllers/postController')
//index
router.get('/', postController.index)

//show
router.get('/id', postController.show)

//store
router.post('/', postController.store)

//update
router.put('/', postController.update)

//modify
router.patch('/', postController.modify)

//destroy
router.delete('/', postController.destroy)

module.exports = router;