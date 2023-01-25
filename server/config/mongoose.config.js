const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/author", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( () => console.log("Established a connection to authors"))
    .catch( err => console.log("Something went oopsie poopsies", err))