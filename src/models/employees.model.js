const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
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
            trim: true
        },
        salary: {
            type: Number,
        },
        department: {
            type: mongoose.Types.ObjectId,
            ref: "department"
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