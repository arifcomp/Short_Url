const express= require('express');
const cookieParser = require('cookie-parser')
//connection function
const {mongoDbConnect}= require("./connections/connect");
//db url
const{mongoURI} =require("./connections/config");
const urlmanage= require('./routes/url');
const staticRoute = require("./routes/staticRouter");
const userRouter= require('./routes/user')
const path = require("path");
const {restrictToLoggedInUserOnly}= require('./middleware/auth')


const app = express();
const port = 5000;
//db connect
mongoDbConnect(mongoURI);

//set  view  engine 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
//static middleware  to make it public 
app.use(express.static('resources'));


//middleware body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))
/* this cookieParser parsee the cookies just like body parser  express.json() */
app.use(cookieParser())

//route management 
//ROUTES
app.use('/url',restrictToLoggedInUserOnly,urlmanage);
app.use('/',staticRoute);
app.use('/user',userRouter);


app.listen(port,()=>{
    console.log(`Server Strated at port:: http://localhost:${port}/`);
});
