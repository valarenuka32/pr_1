const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone_number: {
            type: Number
        },
        hire_date: {
            type: Date,
            default: Date.now()
        },
        position: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
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

const employee = mongoose.model("employee", employeeSchema);
module.exports = employee;