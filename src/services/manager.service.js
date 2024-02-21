const { manager } = require("../models");

// create manager
const createManager = async (reqBody) => {
    return manager.create(reqBody);
};

// get all list
const managerList = async (req, res) => {
    return manager.find()
};

// get manager by id
const getManagerById = async (managerId) => {
    return manager.findById(managerId);
};

// manager details update by id
const updateRecode = async (managerId, updateBody) => {
    return Offeritem.findByIdAndUpdate(managerId, { $set: updateBody });
};

// manager details update by id
const deleteRecode = async (managerId) => {
    return Offeritem.findByIdAndDelete(managerId);
};

module.exports = {
    createManager,
    managerList,
    getManagerById,
    updateRecode,
    deleteRecode
};