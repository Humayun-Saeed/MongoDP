var express=require('express')
var c=('./mongoconnect.js')
const mongoos=require('mongoose');
const connect = require('./mongoconnect');
var models= require('./schema')
var insert=require('./insert2.js');
var int=require('./retrive.js');
const fun = require('./retrive.js');
//const a = require('./insert');
var data_url="mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

var app=express()

/*const mongo=mongoos.connect("mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{

    console.log("connected to database successfully: ");
})
.catch((err)=>{

    console.log("err is preasnt: "+err);
})*/
connect(data_url);
//models()


app.listen(3000,()=>{
    console.log("listening at the port: ");
})