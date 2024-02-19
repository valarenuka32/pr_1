const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    is_active: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

const user = mongoose.model("user", userSchema);
module.exports = user;
