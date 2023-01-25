const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.get('/api/author', AuthorController.findAll);
    app.post('/api/author', AuthorController.createAuthor);
    app.get('/api/author/:id', AuthorController.findOne);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
} 