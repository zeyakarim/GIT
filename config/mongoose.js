// require mongoose to connect the database
const mongoose = require('mongoose');

// mongoose connect to the database
mongoose.connect('mongodb://localhost/Todo_list_app');

// check if connection is successfull or not
const db = mongoose.connection;

// on error
db.on('error',console.error.bind(console,'Error'));

// once the connection is succcessful
db.once('open',function(){
    console.log('Successfull Connected to database');
})