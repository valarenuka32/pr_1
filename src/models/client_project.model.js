const mongoose = require("mongoose");

const client_projectsSchema = new mongoose.Schema(
    {
        client: {
            type: mongoose.Types.ObjectId,
            ref: "client"
        },
        project: {
            type: mongoose.Types.ObjectId,
            ref: "project"
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

const client_projects = mongoose.model("client_projects", client_projectsSchema);
module.exports = client_projects;