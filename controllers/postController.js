const posts = require('../data/posts');

function index(req, res) {
    //res.send('Lista dei post')
    const tag = req.params.tags
    const post = posts.find(post => post.tags.includes(tag));

    if (!post) {
        res.status(404);
        return res.json({
            status: 404,
            error: "Not Found",
            message: "nessun contenuto"
        })
    }
    res.json(post)
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
            message: "nessun contenuto"
        })
    }
    posts.splice(posts.indexOf(post), 1)
    res.sendStatus(204)
}

module.exports = { index, show, store, update, destroy }