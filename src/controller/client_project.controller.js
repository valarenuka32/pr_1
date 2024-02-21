const { client_projectService } = require("../services");

// create client_project
const createClient_project = async (req, res) => {
    try {
        const reqBody = req.body;

        const client_project = await client_projectService.createClient_project(reqBody);

        res.status(200).json({
            success: true,
            message: "client_project create successfully!",
            data: { client_project },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const client_projectList = async (req, res) => {
    try {
        const getList = await client_projectService.client_projectList();

        res.status(200).json({
            success: true,
            message: "Get client_project list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const client_projectId = req.params.client_projectId;

        const client_projectEx = await client_projectService.getClient_projectById(client_projectId);
        if (!client_projectEx) {
            throw new Error("client_project not found");
        }

        await client_projectService.updateRecode(client_projectId, req.body);
        res.status(200).json({
            success: true,
            message: "client_project detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const client_projectId = req.params.client_projectId;

        const client_projectEx = await client_projectService.getClient_projectById(client_projectId);
        if (!client_projectEx) {
            throw new Error("client_project not found");
        };

        await client_projectService.deleteRecode(client_projectId, req.body);
        res.status(200).json({
            success: true,
            message: "client_project detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createClient_project, client_projectList, deleteRecode, updateRecode }