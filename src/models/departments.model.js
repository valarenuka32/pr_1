const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema(
    {
        department_name: {
            type: String,
            required: true
        },
        manager: {
            type: mongoose.Types.ObjectId,
            ref: "manager"
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

const department = mongoose.model("department", departmentsSchema);
module.exports = department;