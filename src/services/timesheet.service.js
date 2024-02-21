const { timesheet } = require("../models");

// create Timesheet
const createTimesheet = async (reqBody) => {
    return timesheet.create(reqBody);
};

// find all
const timesheetList = async (req, res) => {
    return timesheet.find()
    .populate("employee")
    .populate("task")
};

// get timesheet by id
const getTimesheetById = async (timesheetId) => {
    return timesheet.findById(timesheetId);
};

// timesheet details update by id
const updateRecode = async (timesheetId, updateBody) => {
    return Offeritem.findByIdAndUpdate(timesheetId, { $set: updateBody });
};

// timesheet details delete by id
const deleteRecode = async (timesheetId) => {
    return Offeritem.findByIdAndDelete(timesheetId);
};

module.exports = {
    createTimesheet,
    timesheetList,
    getTimesheetById,
    updateRecode,
    deleteRecode
};