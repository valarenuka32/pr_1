const { technology } = require("../models");

// create technology
const createTechnology = async (reqBody) => {
    return technology.create(reqBody);
};

// find all list
const technologyList = async (req, res) => {
    return technology.find()
};

// get technology by id
const getTechnologyById = async (technologyId) => {
    return technology.findById(technologyId);
};

// technology details update by id
const updateRecode = async (technologyId, updateBody) => {
    return Offeritem.findByIdAndUpdate(technologyId, { $set: updateBody });
};

//  technology details delete by id
const deleteRecode = async (technologyId) => {
    return Offeritem.findByIdAndDelete(technologyId);
};

module.exports = {
    createTechnology,
    technologyList,
    getTechnologyById,
    updateRecode,
    deleteRecode
};