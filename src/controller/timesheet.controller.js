const { timesheetService } = require("../services");

const createTimesheet = async (req, res) => {
    try {
        const reqBody = req.body;

        const timesheet = await timesheetService.createTimesheet(reqBody);

        res.status(200).json({
            success: true,
            message: "timesheet create successfully!",
            data: { timesheet },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const timesheetList = async (req, res) => {
    try {
        const getList = await timesheetService.timesheetList();

        res.status(200).json({
            success: true,
            message: "Get timesheet list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const timesheetId = req.params.timesheetId;

        const timesheetEx = await timesheetService.getTimesheetById(timesheetId);
        if (!timesheetEx) {
            throw new Error("timesheet not found");
        }

        await timesheetService.updateRecode(timesheetId, req.body);
        res.status(200).json({
            success: true,
            message: "timesheet detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const timesheetId = req.params.timesheetId;

        const timesheetEx = await timesheetService.gettimesheetById(timesheetId);
        if (!timesheetEx) {
            throw new Error("timesheet not found");
        };

        await timesheetService.deleteRecode(timesheetId, req.body);
        res.status(200).json({
            success: true,
            message: "timesheet detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createTimesheet, timesheetList, deleteRecode, updateRecode }