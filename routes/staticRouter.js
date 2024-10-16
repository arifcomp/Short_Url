const express= require('express');
const router = express.Router();
const statRender = require("../controller/staticRender");

router
.get("/",statRender.renderHomePage);
router
.get("/data",statRender.renderdataBase)
.get('/sign-up',statRender.renderSignupForm)
.get('/login',statRender.renderLoginForm)




module.exports= router;