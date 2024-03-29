const { department } = require("../models");

// create department
const createDepartment = async (reqBody) => {
    return department.create(reqBody);
};

// get all list
const departmentList = async (req, res) => {
    return department.find()
    .populate("manager")
};

// get department by id
const getDepartmentById = async (departmentId) => {
    return department.findById(departmentId);
};

// department details update by id
const updateRecode = async (departmentId, updateBody) => {
    return Offeritem.findByIdAndUpdate(departmentId, { $set: updateBody });
};

//  department details delete by id
const deleteRecode = async (departmentId) => {
    return Offeritem.findByIdAndDelete(departmentId);
};

module.exports = {
    createDepartment,
    departmentList,
    getDepartmentById,
    updateRecode,
    deleteRecode
};