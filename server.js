require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const routes = require("./routes");
const connectDB = require("./db/dbconnection");


const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine','ejs')

// namespce
app.use("/v1", routes);


app.get('/',(req,res,next)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('./login')
})

app.get('/register',(req,res)=>{
    res.render('./register')
})
// db connection
connectDB();

// server
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server started");
});