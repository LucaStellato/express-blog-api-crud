const express = require('express')
const router = express.Router();
const posts = require('../posts')
//index
router.get('/', function (req, res) {
    //res.send('Lista dei post')
    res.json(posts);
})

//show
router.get('/:id', function (req, res) {

    res.json(posts[req.params.id - 1])

})

//store
router.post('/', function (req, res) {
    res.send('creazione nuovo post')
})

//update
router.put('/:id', function (req, res) {
    res.send('modifica dei post')
})

//modify
router.patch('/:id', function (req, res) {
    res.send('modifica parziale del post')
})

//destroy
router.delete('/:id', function (req, res) {
    res.send('eliminazione post')
})

module.exports = router;