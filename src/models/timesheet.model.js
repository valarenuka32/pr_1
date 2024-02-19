const mongoose = require("mongoose");

const timesheetSchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            default: Date.now()
        },
        hours_work: {
            type: Number,
            default: 0
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

const timesheet = mongoose.model("timesheet", timesheetSchema);
module.exports = timesheet;