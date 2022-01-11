

var mongoos=require('mongoose')


//**************making of the schema**************************** */

const schema=new mongoos.Schema({
//_id=Number,
name:{type:String,required:true},
age:{type:Number,required:true,min:50,max:100},
rate:{type:Number},
hobbies:{type:Array},
Boolean:{type:Boolean},

})
var studentmodel=mongoos.model('studeent',schema)



module.exports=studentmodel;