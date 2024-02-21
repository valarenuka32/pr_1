const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        time: {
            type: String,
        },
        day_of_week: {
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

const company = mongoose.model("company", companySchema);
module.exports = company;