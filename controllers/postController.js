const posts = require('../data/posts');

function index(req, res) {
    //res.send('Lista dei post')
    res.json(posts);
}
function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
}
function store(req, res) {
    res.send('creazione nuovo post')
}
function update(req, res) {
    res.send('modifica dei post')
}
function destroy(req, res) {
    res.send('eliminazione post')

}

module.exports = { index, show, store, update, destroy }