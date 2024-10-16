const mongoos = require('mongoose');

const UserSchema = new  mongoos.Schema({
 ShortID:{
        type:String,
        required:true,
        unique:true
 },

 redirectUrl:{
        type:String,
        required:true,
        
 },
 visitHistroy:[{  timestamp:{type:Number}   }],
 
 createdBy: {
       type:mongoos.Schema.Types.ObjectId,
       ref:'AuthUserDatas',
 },
 nameofcreator:{
       type:mongoos.Schema.Types.String,
       ref:'AuthUserDatas',
 }

},
    {timestamps:true}
);


const model= mongoos.model('urlData',UserSchema);

module.exports = model;