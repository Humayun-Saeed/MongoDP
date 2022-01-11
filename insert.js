

var mongose=require('mongoose')

var express=require('express')

var schema=require('./schema.js')

const connect =mongose.connect('mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then("sucessfully connected:")
.catch((err)=>{
    console.log(err);
})
//****************************for inserting the data************ */
const a=async ()=>{
    try{
const doc=new studentmodel({
id:1,
name:'humayun saeed',
age:67,
//fess:7000.5,

})
    
const result=await doc.save()
console.log(result);
    }
catch (err){
console.log(err);
}
}
module.exports=a;

