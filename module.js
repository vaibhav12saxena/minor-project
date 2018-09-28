var MongoClient= require("mongodb").MongoClient
//Read data

exports.readData=function (res){
MongoClient.connect('mongodb://localhost:27017/product',{useNewUrlParser:true}, 
    function (err, dbvar){
        if (err) throw err;
        var coll= dbvar.db('product');
        coll.collection('product').find({}).toArray(function(err,res1)
        {
           if (err) throw err;
           else{
           console.log("document read")
           res.send(res1);
           }
           dbvar.close();
        });
        dbvar.close() 
    })
}
//Login

exports.login=function(req,res){ 
    MongoClient.connect('mongodb://localhost:27017/ID',{useNewUrlParser:true},  
function (err, dbvar){
    if (err) throw err
    var coll= dbvar.db('ID');
    coll.collection('ID').find(req.body).toArray(function(err,res1)
        {
            res.send(res1)
        });
    dbvar.close() 
}
)
}

//Insert
exports.insertData=function(req){
MongoClient.connect('mongodb://localhost:27017/product',{useNewUrlParser:true},  
function (err, dbvar){
    if (err) throw err
    var coll= dbvar.db('product');
    coll.collection('product').
    insertOne(req.body,true,function(err,res){
       if (err) throw err;
       console.log("1 document inserted")
       dbvar.close();
    });
    dbvar.close() 
}
)
}
//Delete
exports.deleteData=function(req){
    console.log("cursor was here")
MongoClient.connect('mongodb://localhost:27017/product',{useNewUrlParser:true},  
    function (err, dbvar){
        if (err) throw err
        var coll= dbvar.db('product');
        coll.collection('product').
        deleteOne(req.body,true,function(err,res){
           if (err) throw err;
           console.log("1 document deleted")
           dbvar.close();
        });
        dbvar.close() 
    }
)
}
//Update data
exports.updateData=function(qw,res){
MongoClient.connect('mongodb://localhost:27017/product',{useNewUrlParser:true}, 
    function (err, dbvar){
        if (err) throw err
        var coll= dbvar.db('product');
        coll.collection('product').
        update(qw.id1,{$set:qw.id2},true,function(err,value){
           if (err) throw err;
           else{
           res.send(value);
            console.log("1 document updated")
            }
             dbvar.close();
        });
        dbvar.close() 
    }
)
}
exports.deleteall=function(req){
MongoClient.connect('mongodb://localhost:27017/product',{useNewUrlParser:true},  
    function (err, dbvar){
        if (err) throw err
        var coll= dbvar.db('product');
        coll.collection('product').
        drop()
        dbvar.close() 
    }
)
}
//Insert user
exports.insertuser=function(req){
    MongoClient.connect('mongodb://localhost:27017/ID',{useNewUrlParser:true},  
    function (err, dbvar){
        if (err) throw err
        var coll= dbvar.db('ID');
        coll.collection('ID').
        insertOne(req.body,true,function(err,res){
           if (err) throw err;
           console.log("1 document inserted")
           dbvar.close();
        });
        dbvar.close() 
    }
    )
    }