const mongoos=require('mongoose')

var connect=(data_url)=>{
   //*******************for making a connection*********** */

   /* mongoos.connect("mongodb+srv://Humayun-Saeed:s12345678@cluster0.p48xj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(()=>{
    
   console.log("database is connected: ")
 })*/
 mongoos.connect(data_url)
 .then(()=>{
     
    console.log("database is connected: ")
  })
.catch((err)=>{

console.log(err);
})

}
module.exports=connect