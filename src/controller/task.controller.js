const { taskService } = require("../services");

const createTask = async (req, res) => {
    try {
        const reqBody = req.body;

        const task = await taskService.createTask(reqBody);

        res.status(200).json({
            success: true,
            message: "task create successfully!",
            data: { task },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const taskList = async (req, res) => {
    try {
        const getList = await taskService.taskList();

        res.status(200).json({
            success: true,
            message: "Get task list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const taskId = req.params.taskId;

        const taskEx = await taskService.getTaskById(taskId);
        if (!taskEx) {
            throw new Error("task not found");
        }

        await taskService.updateRecode(taskId, req.body);
        res.status(200).json({
            success: true,
            message: "task detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const taskId = req.params.taskId;

        const taskEx = await taskService.getTaskById(taskId);
        if (!taskEx) {
            throw new Error("task not found");
        };

        await taskService.deleteRecode(taskId, req.body);
        res.status(200).json({
            success: true,
            message: "task detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createTask, taskList, deleteRecode, updateRecode }