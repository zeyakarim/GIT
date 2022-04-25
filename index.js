const exp = require('constants');
const express = require('express');
const path = require('path');
const port = 5000;

const db = require('./config/mongoose')
const Todolist = require('./models/todolist')
const app = express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assests'));


app.get('/',function(req,res){
    Todolist.find({},function(err,todolist){
        if(err){
            console.log('Error in fetching todolist from db');
            return;
        }
        res.render('home',{
            title: 'Todo List',
            todo_list: todolist
        })
    })
    
});

// add todolist in the database
app.post('/create-todolist',function(req,res){
    Todolist.create({
        description: req.body.description,
        categories : req.body.categories,
        date : req.body.date
    },function(err,newTodolist){
        if(err){
            console.log('Error in creating Todolist');
            return;
        }
        console.log('******',newTodolist);
        return res.redirect('back')
    });
});

app.get('/delete-todolist-item',function(req,res){
    let id = req.query.id
    // console.log(id);
    Todolist.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error Deletin Todolist From a Database');
            return;
        }
        return res.redirect('back');
    });
});


app.listen(port,function(err){
    if(err){
        console.log('Error to create our first own server',err);
        return;
    }
    console.log('Yup!My First Server is created:',port);
})