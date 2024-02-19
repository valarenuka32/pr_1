const { timesheet } = require("../models");

const createTimesheet = async (reqBody) => {
    return timesheet.create(reqBody);
};

const timesheetList = async (req, res) => {
    return timesheet.find()
};

const gettimesheetById = async (timesheetId) => {
    return timesheet.findById(timesheetId);
};

const updateRecode = async (timesheetId, updateBody) => {
    return Offeritem.findByIdAndUpdate(timesheetId, { $set: updateBody });
};

const deleteRecode = async (timesheetId) => {
    return Offeritem.findByIdAndDelete(timesheetId);
};

module.exports = {
    createTimesheet,
    timesheetList,
    gettimesheetById,
    updateRecode,
    deleteRecode
};