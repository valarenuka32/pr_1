require("dotenv").config();
const express=require("express");
const http=require("http");
const bodyParser=require("body-parser");
const routes=require("./routes");
const 


const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

// namespce
app.use("/v1",routes);

// server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server started...");
});