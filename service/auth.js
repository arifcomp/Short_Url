// //dairy creation 
// const sessionIdToMap =new Map();

// //set sessionid with the corresponding data 
// function setUser(id, user) {
//     sessionIdToMap.set(id, user);
// }
// //fetches the data from the hash map
// function getUser(id) {
//    return sessionIdToMap.get(id);
// }



// module.exports={
//     setUser,
//     getUser,
    
// }


const jwt  = require("jsonwebtoken")
const secret = "arifislam2003"
function setUser( user) {
        const payload={
            user,
        };
       return jwt.sign(payload ,secret)
    }

function getUser(token) {
    if(!token) return null;
   return jwt.verify(token,secret)
}





module.exports={
            setUser,
            getUser,
}