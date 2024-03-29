const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        date: {
            type: Date,
            default: Date.now()
        },
        time: {
            type: String,
        },
        Location: {
            type: String,
            trim: true,
        },
        Status: {
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

const meeting = mongoose.model("meeting", meetingSchema);
module.exports = meeting;