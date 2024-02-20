const { task } = require("../models");

const createTask = async (reqBody) => {
    return task.create(reqBody);
};

const taskList = async (req, res) => {
    return task.find()
};

const getTaskById = async (taskId) => {
    return task.findById(taskId);
};

const updateRecode = async (taskId, updateBody) => {
    return Offeritem.findByIdAndUpdate(taskId, { $set: updateBody });
};

const deleteRecode = async (taskId) => {
    return Offeritem.findByIdAndDelete(taskId);
};

module.exports = {
    createTask,
    taskList,
    getTaskById,
    updateRecode,
    deleteRecode
};