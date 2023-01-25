const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "The authors name must be at least 3 chars long!"]
    }
}, {timestamps: true})

module.exports = mongoose.model("Author", AuthorSchema)