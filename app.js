

var mongoos=require('mongoose')
var express=require('express')
var schema=require('./schema.js')
var connect=require('./connection2.js')
const studentmodel = require('./schema.js')
//var retrive=require('./retrive.js')
//const fun = require('./retrive.js')
//*********working on the end points */
var app=express()

//*************for inserting the data */
app.post('/shame/:name/:age',(req,res)=>{

console.log(req.params);

const student=new studentmodel({name:req.params.name,age:req.params.age})

student.save()
.then((data)=>{
    console.log("saved:");
   res.send(data);
}).
catch((err)=>{
console.log(err);
})
//res.send(student)
})
/*************for all the students */
/*app.get('/home',(req,res)=>{
    
const all_student=new studentmodel
studentmodel.find((err,all_student)=>{

    if(err){
        console.log(err);
    }
    else if(all_student==0){
        console.log("there is no data is preasnt in the field: ");
    }
    else{
        res.send(all_student)
    }
})

    })*/
    //**********for updatig the data */

   /* app.get('/home/:id',(req,res)=>{
            console.log(req.params.id);
        const update=new studentmodel
        studentmodel.findByIdAndUpdate(id,{name:"alla dita"})
        update.save
        .then(()=>{
            res.send(data)
        })
    .catch((err)=>{
        console.log(err);
    })
        

    })*/


app.listen(8000,(req,res)=>{
    console.log("sever is runnig at the port: ");
})
//fun("61d3206249e98f6fc3e1fa87")