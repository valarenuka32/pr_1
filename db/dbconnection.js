const mongoose = require("mongoose");

const dbConnect = () => {
    mongoose.connect("mongodb+srv://valarenuka32:Fuj8dY9KWSleV6Ek@renuka.fccm3zh.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection successfully!");
        }).catch((error) => {
            console.log("error", error);
        })
}

module.exports = dbConnect;