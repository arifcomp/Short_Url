const user = require('../Models/user')
const {v4:uuidv4}= require('uuid')
const {setUser} =require("../service/auth")


const createUser = async (req,res)=>{
    const rbody= req.body

    const newUser = new user(rbody)
    newUser.save()
    .then(user=> res.render('home'))

}
// before  jwt token

// const loginUser = async (req,res)=>{
//     const {email,password}= req.body

//     const entry =await user.findOne({email,password})
//     if(!entry) return res.render('login',{msg:"un-registerd user"})
//      //creates a session id 
//     //if the login is success then the sessionId is generated
//     const sessionID=uuidv4();
//     //session id is being set in the map along with the user object it was created by 
//     setUser(sessionID,entry);
//     // then the sessio id is set in to the cookie
//     res.cookie('uid',sessionID)    
    
//     return res.render('home');
// }













const loginUser = async (req,res)=>{
    const {email,password}= req.body

    const entry =await user.findOne({email,password})
    if(!entry) return res.render('login',{msg:"un-registerd user"})
     //creates a session id 
    //if the login is success then the sessionId is generated
    
    //session id is being set in the map along with the user object it was created by 
    const token =setUser(entry);
    // then the sessio id is set in to the cookie
    res.cookie('uid',token)    
    
    return res.render('home');
}








module.exports={
    createUser,
    loginUser
}