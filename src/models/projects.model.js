const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        start_date: {
            type: Date,
            default: Date.now()
        },
        end_date: {
            type: Date,
            default: Date.now()
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

const project = mongoose.model("project", projectSchema);
module.exports = project;