const express = require('express')
const router = express.Router()
const userFunc = require('../controller/userFunc')

router.
post('/',userFunc.createUser)
.post('/login',userFunc.loginUser)



module.exports =router