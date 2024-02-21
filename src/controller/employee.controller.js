const { employeeService } = require("../services");

// create employee
const createEmployee = async (req, res) => {
    try {
        const reqBody = req.body;

        const employee = await employeeService.createEmployee(reqBody);

        res.status(200).json({
            success: true,
            message: "employee create successfully!",
            data: { employee },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const employeeList = async (req, res) => {
    try {
        const getList = await employeeService.employeeList();

        res.status(200).json({
            success: true,
            message: "Get employee list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const employeeId = req.params.employeeId;

        const employeeEx = await employeeService.getEmployeeById(employeeId);
        if (!employeeEx) {
            throw new Error("employee not found");
        }

        await employeeService.updateRecode(employeeId, req.body);
        res.status(200).json({
            success: true,
            message: "employee detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const employeeId = req.params.employeeId;

        const employeeEx = await employeeService.getEmployeeById(employeeId);
        if (!employeeEx) {
            throw new Error("employee not found");
        };

        await employeeService.deleteRecode(employeeId, req.body);
        res.status(200).json({
            success: true,
            message: "employee detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createEmployee, employeeList, deleteRecode, updateRecode }