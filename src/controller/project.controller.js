const { projectService } = require("../services");

const createProject = async (req, res) => {
    try {
        const reqBody = req.body;

        const project = await projectService.createProject(reqBody);

        res.status(200).json({
            success: true,
            message: "project create successfully!",
            data: { project },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const projectList = async (req, res) => {
    try {
        const getList = await projectService.projectList();

        res.status(200).json({
            success: true,
            message: "Get project list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const projectId = req.params.projectId;

        const projectEx = await projectService.getProjectById(projectId);
        if (!projectEx) {
            throw new Error("project not found");
        }

        await projectService.updateRecode(projectId, req.body);
        res.status(200).json({
            success: true,
            message: "project detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const projectId = req.params.projectId;

        const projectEx = await projectService.getProjectById(projectId);
        if (!projectEx) {
            throw new Error("project not found");
        };

        await projectService.deleteRecode(projectId, req.body);
        res.status(200).json({
            success: true,
            message: "project detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createProject, projectList, deleteRecode, updateRecode }