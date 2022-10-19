var express = require('express');
var tos = express();
var cors = require('cors');
const bodyParser = require('body-parser');
// const fs = require('fs')

var todo = require('./db.json');
tos.use(bodyParser.urlencoded({ extended: false }))

tos.use(bodyParser.json())
var urlencoded = bodyParser.urlencoded({ extended: false });
const {v4 : uuidv4} = require('uuid');
tos.use(express.json());
tos.use(express.static('public'));
// tos.use(cors())

// var corsOptions = {
//     origin: 'http://localhost:1200/',
//     optionsSuccessStatus: 200 
// }

// app.use(cors(corsOptions));



tos.use(cors({
    methods: ['GET','POST','DELETE','PUT']
}));

tos.get('/',cors(),(req,res) => res.json(todo));
// {
//     res.json(todo);
// })
tos.get('/:id',cors(),(req,res) => {
   
    const id = req.params.id;
    for (let one of todo) {
    if (one.id === id) {
    res.json(one);
    return;
    }
    }
    res.end();
    });
    

tos.post('/',urlencoded,cors(),(req,res)=>{
    
    const id = uuidv4();
    // var newtodo = req.body.newtodo;
    var newtodo = {
        id:uuidv4(),
        title:req.body.title,
        description: req.body.description,
        Completed:false
    }
    todo.push(newtodo);
    // res.redirect('/');
    res.json(todo);
    res.end()
    

})
tos.put('/:id', cors(), (req, res) => {
    const {id} = req.params
    let index = todo.findIndex(item => item.id === id);
    if (index > -1) {
        todo[index] = req.body
        res.json(todo[index]);
    } else {
        console.log("error found")
        res.end("error found")
    }

    // let index = todo.findIndex(item => item.id === req.query.id);
    // todo.splice(index, 1); 
   });

tos.delete('/:id',cors(), (req, res) => {
    const {id} = req.params
    let index = todo.findIndex(item => item.id === id);
    if (index > -1) {
        todo.splice(index, 1);
        res.json(todo);
    } else {
        console.log("error found")
        res.end("error found")
    }
   });

var server = tos.listen( process.env.PORT || 3000,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("this tos listening at http://%s:%s",host,port)
    // console.log(todo)
})