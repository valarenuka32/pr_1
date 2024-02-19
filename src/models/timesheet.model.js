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
        employee: {
            type: mongoose.Types.ObjectId,
            ref: "employee"
        },
        task: {
            type: mongoose.Types.ObjectId,
            ref: "task"
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