const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        deadline: {
            type: Date,
            default: Date.now()
        },
        Status: {
            type: String,
            trim: true,
        },
        project: {
            type: mongoose.Types.ObjectId,
            ref: "project"
        },
        employee: {
            type: mongoose.Types.ObjectId,
            ref: "employee"
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

const task = mongoose.model("task", taskSchema);
module.exports = task;