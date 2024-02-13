const mongoose=require("mongoose");

const connectDB=async(req,res)=>{
    mongoose.connect("mongodb://localhost:27017/pr_1")
    .then(()=>{
        console.log("database connection successfully!");
    }).catch((error)=>{
        console.log("error",error);
    })
}

module.exports=connectDB;