const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema(
    {
        department_name: {
            type: String,
            required: true
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

const departments = mongoose.model("departments", departmentsSchema);
module.exports = departments;