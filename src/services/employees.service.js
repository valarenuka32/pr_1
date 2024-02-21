const { employee } = require("../models");

// create employee
const createEmployee = async (reqBody) => {
    return employee.create(reqBody);
};

// get all employee
const employeeList = async (req, res) => {
    return employee.find()
};

// get employee by id
const getEmployeeById = async (employeeId) => {
    return employee.findById(employeeId);
};

// employee details update by id
const updateRecode = async (employeeId, updateBody) => {
    return Offeritem.findByIdAndUpdate(employeeId, { $set: updateBody });
};

// employee details delete by id
const deleteRecode = async (employeeId) => {
    return Offeritem.findByIdAndDelete(employeeId);
};

module.exports = {
    createEmployee,
    employeeList,
    getEmployeeById,
    updateRecode,
    deleteRecode
};