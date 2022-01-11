
var mongoos=require('mongoose')

const mongo=mongoos.connect("mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to the database succesfully: ");
})
.catch((err)=>{
    console.log(err)
})
module.exports=mongo

