const posts = require('../data/posts');

function index(req, res) {
    let filteredPost = posts
    if (req.query.tags) {
        filteredPost = posts.filter(
            post => post.tags.includes(req.query.tags)
        )
    }
    res.json(filteredPost)
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

}
function store(req, res) {
    console.log(req.body)
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
            message: "nessun contenuto"
        })
    }
    posts.splice(posts.indexOf(post), 1)
    res.sendStatus(204)
}

module.exports = { index, show, store, update, destroy }