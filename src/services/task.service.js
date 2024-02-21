const { task } = require("../models");

// create task
const createTask = async (reqBody) => {
    return task.create(reqBody);
};

// find all list
const taskList = async (req, res) => {
    return task.find()
};

// get task by id
const getTaskById = async (taskId) => {
    return task.findById(taskId);
};

// task details update by id
const updateRecode = async (taskId, updateBody) => {
    return Offeritem.findByIdAndUpdate(taskId, { $set: updateBody });
};

// task details delete by id
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