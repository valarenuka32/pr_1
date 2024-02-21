const { managerService } = require("../services");

// create manager
const createManager = async (req, res) => {
    try {
        const reqBody = req.body;

        const manager = await managerService.createManager(reqBody);

        res.status(200).json({
            success: true,
            message: "manager create successfully!",
            data: { manager },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const managerList = async (req, res) => {
    try {
        const getList = await managerService.managerList();

        res.status(200).json({
            success: true,
            message: "Get manager list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const managerId = req.params.managerId;

        const managerEx = await managerService.getManagerById(managerId);
        if (!managerEx) {
            throw new Error("manager not found");
        }

        await managerService.updateRecode(managerId, req.body);
        res.status(200).json({
            success: true,
            message: "manager detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const managerId = req.params.managerId;

        const managerEx = await managerService.getManagerById(managerId);
        if (!managerEx) {
            throw new Error("manager not found");
        };

        await managerService.deleteRecode(managerId, req.body);
        res.status(200).json({
            success: true,
            message: "manager detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createManager, managerList, deleteRecode, updateRecode }