
var exp=require('express');
var parser=require('body-parser');
var app=exp();
var cors=require('cors')
var mod=require('./module.js')

//Readdata
app.get('/rest/api/readByName',(req,res)=>{
    //res.send('name is'+ req.params['name']+'id is '+req.params['id']);
    //res.send(req.body);
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
    mod.readData(res);
});

app.use(parser.json());

//Login
app.post('/rest/api/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
    mod.login(req,res)
    });

//insert
app.post('/rest/api/readById',(req,res)=>{
    //res.send('Hello Rest'+ req.params['id']);
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
    res.send(req.body);
    mod.insertData(req)
    console.log(req.body)
});

//Delete
app.post('/rest/api/delete',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
    res.send(req.body);
    mod.deleteData(req)
});

//Update
app.post('/rest/api/update',(req,res)=>{
    //res.send('Hello Rest'+ req.params['id']);
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
   // res.send(req.body);
    var qw=req.body
    mod.updateData(qw,res);
    console.log(req.body)
});
//DeleteAll
app.post('/rest/api/deleteall',(req,res)=>{
    console.log("delete called")
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
    res.send(req.body);
    mod.deleteall(req)
});

//Create user
app.post('/rest/api/createuser',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Acess-Control-Allow-Headers","Origin,X-Requsted-Width,Content-Type,Accept")
    res.send(req.body);
    mod.insertuser(req)
});

/*
app.put('/rest/api/put/:id',(req,res)=>{
    res.send('Hello Rest'+ req.params['id']);
    
});

*/

app.use(cors()).listen(1234,()=>{
    console.log("express started");
})
