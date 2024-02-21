const { departmentService } = require("../services");

// create department
const createDepartment = async (req, res) => {
    try {
        const reqBody = req.body;

        const department = await departmentService.createDepartment(reqBody);

        res.status(200).json({
            success: true,
            message: "department create successfully!",
            data: { department },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const departmentList = async (req, res) => {
    try {
        const getList = await departmentService.departmentList();

        res.status(200).json({
            success: true,
            message: "Get department list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const departmentId = req.params.departmentId;

        const departmentEx = await departmentService.getDepartmentById(departmentId);
        if (!departmentEx) {
            throw new Error("department not found");
        }

        await departmentService.updateRecode(departmentId, req.body);
        res.status(200).json({
            success: true,
            message: "department detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const departmentId = req.params.departmentId;

        const departmentEx = await departmentService.getDepartmentById(departmentId);
        if (!departmentEx) {
            throw new Error("department not found");
        };

        await departmentService.deleteRecode(departmentId, req.body);
        res.status(200).json({
            success: true,
            message: "department detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createDepartment, departmentList, deleteRecode, updateRecode }