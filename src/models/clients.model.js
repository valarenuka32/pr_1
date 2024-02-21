const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        Phone_number: {
            type: Number,
        },
        location: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const client = mongoose.model("client", clientsSchema);
module.exports = client;