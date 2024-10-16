const {getUser} =  require('../service/auth')

async function restrictToLoggedInUserOnly(req,res,next) {
    // req.cookies.uid; here uid means the name of the cookies
    const uid = req.cookies.uid;

    if(!uid) return res.redirect('/login');
    // getuser from service module
    const entry = getUser(uid);
    
    if(!entry) return res.redirect('/login');

    req.userMiddle =entry;
  
    next();
}
module.exports= {
    restrictToLoggedInUserOnly
}