

var mongoos=require('mongoose');
const studentmodel = require('./schema.js');
var schema=require('./schema.js')


/*const fun=async()=>{
try{

    const result=await studentmodel.find()
    result.forEach((item)=>{
        console.log(item.name)
        console.log(item.age) 
        console.log(item.rate)
         console.log(item.Boolean)
         console.log(item.hobbies[0])
    })
    console.log(result);

}
catch(err){
console.log(err);

}

}*/
const fun=async(id)=>{
    try{
    
        const result=await studentmodel.findByIdAndUpdate (id,{name:"gullu butt"})
        console.log(result)
    }
    catch(err){
    console.log(err);
    
    }
    
    }
module.exports=fun;