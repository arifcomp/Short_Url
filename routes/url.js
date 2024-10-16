const express= require('express');
const usrFunctions =require('../controller/urlFunctions')
const router = express.Router();


router.post('/',usrFunctions.generateNewShortUrl);
// router.get("/:shortId",usrFunctions.handelShortid);

router.get("/:shortId",usrFunctions.handelShortid);

module.exports= router;


