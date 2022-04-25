// require mongoose library to create schema
const mongoose = require('mongoose');

// create schema inside the database
const todolistSchema = new mongoose.Schema({
    description:{
        type: String,
        required : true
    },
    categories: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

// Give collection name inside the database
const Todolist = mongoose.model('Todolist',todolistSchema);

// exports this schema
module.exports = Todolist;