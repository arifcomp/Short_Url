//render the home page view 
const model = require('../Models/url')

//renders the webpage on home 
const renderHomePage = async (req,res)=>{
try{
  
  return  res.render("home");
}catch(err){
    console.log(err.message)
}}

//render the data base
const renderdataBase = async (req,res)=>{
  try{
   const udata = await model.find({})
    return  res.render("data",{
      allurl:udata
    });
  }catch(err){
      console.log(err.message)
  }
  }



  const renderSignupForm = async(req,res)=>{
    try{
        return res.render('sign-up')

    }catch(err){
       return res.status(500).render('error',{
        msg:`the error is ${err.message}`
      })
    }
  }

  const renderLoginForm = async(req,res)=>{
    try{
        return res.render('login');

    }catch(err){
       return res.status(500).render('error',{
        msg:`the error is ${err.message}`
      })
    }
  }




module.exports = {
    renderHomePage,
    renderdataBase,
    renderSignupForm,
    renderLoginForm,
}
