const { company } = require("../models");

// create company
const createCompany = async (reqBody) => {
    return company.create(reqBody);
};

// get all list
const companyList = async (req, res) => {
    return company.find()
};

// get company by id
const getcompanyById = async (companyId) => {
    return company.findById(companyId);
};

//  company details update by id
const updateRecode = async (companyId, updateBody) => {
    return Offeritem.findByIdAndUpdate(companyId, { $set: updateBody });
};
// company details delete by id
const deleteRecode = async (companyId) => {
    return Offeritem.findByIdAndDelete(companyId);
};

module.exports = {
    createCompany,
    companyList,
    getcompanyById,
    updateRecode,
    deleteRecode
};