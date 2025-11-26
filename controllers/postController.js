const posts = require('../data/posts');

function index(req, res) {
    //res.send('Lista dei post')
    res.json(posts);
}
function show(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)
    if (!post) {
        res.status(404)
        return req.json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }
    res.json(post)
}
function store(req, res) {
    res.send('creazione nuovo post')
}
function update(req, res) {
    res.send('modifica dei post')
}
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id);

    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "post non trovato"
        })
    }
    posts.splice(posts.indexOf(post), 1)
}

module.exports = { index, show, store, update, destroy }