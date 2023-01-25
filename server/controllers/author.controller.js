const Author = require('../models/author.model')

module.exports = {
    findAll: (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.status(400).json({message: "Something went wrong in finding all the authors", error: err}))
    },
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json({message: "Something went wrong in creating an author", error: err}))
    },
    findOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(oneA => res.json(oneA))
            .catch(err => res.status(400).json({message: "Something went wrong in finding a specific author", error: err}))
    },
    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate( (req.params.id), req.body, {new:true, runValidators: true})
            .then(updatedA => res.json(updatedA))
            .catch(err => res.status(400).json({message: "Something went wrong updating an author", error: err}))
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id:req.params.id})
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.json(err))
    }
}