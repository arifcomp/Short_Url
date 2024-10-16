const mongoose = require('mongoose');

async function mongoDbConnect(url) {
    mongoose.connect(url)
    .then( ()=>{console.log("MONGO DB CONNECTED")})
    .catch((err)=>{console.log("mongo db connect error",err)});
    return
}
module.exports={
    mongoDbConnect,
}