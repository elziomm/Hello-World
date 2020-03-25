const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    autor: {
        type: String,
        require: true,
    },
    titulo: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('Post', PostSchema);