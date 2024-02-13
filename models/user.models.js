const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
});
const user = mongoose.model("user", userSchema);
module.exports = user;