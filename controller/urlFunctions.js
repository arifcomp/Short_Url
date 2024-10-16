// async function getnanoiId(val) {
//     const { nanoid } = await import('nanoid');
//     return  nanoid(val);

// }
const  shortid = require('shortid');

const model = require('../Models/url')
//post
async function generateNewShortUrl(req,res) {
    const body =  req.body;
    if(!body.url) return res.render("error",{msg:'url body is not given'});
    //genarate short id 
    const ShortID =shortid(8);
    await model.create({
        ShortID:ShortID,
        redirectUrl:body.url,
        visitHistroy:[],
        createdBy:req.userMiddle.user._id,
        nameofcreator:req.userMiddle.user.name
    });
    return res.render("home",{
        id:ShortID
    })
    //  return res.status(201).json({id:ShortID})
}

//get:shortId/

async function handelShortid(req,res) {
    const sId = req.params.shortId;
    //entry has  the updated mongo  document
    const entry= await model.findOneAndUpdate({ShortID:sId},{
             $push:{    //visitHistroy needs  array of object
             visitHistroy:{timestamp:Date.now()},
             }
         });
 
     //redirect uder
     res.redirect(entry.redirectUrl)
}






module.exports = {
    generateNewShortUrl,
    handelShortid,
}