const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    first_name: {
        type: String,
        trim: true
    },
    last_name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
    },
    phone_no: {
        type: Number,
    },
    password: {
        type: String
    },
    address: {
        type: String,
        trim: true
    },
    role: {
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
