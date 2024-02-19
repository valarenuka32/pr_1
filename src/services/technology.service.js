const { technology } = require("../models");

const createTechnology = async (reqBody) => {
    return technology.create(reqBody);
};

const technologyList = async (req, res) => {
    return technology.find()
};

const getTechnologyById = async (technologyId) => {
    return technology.findById(technologyId);
};

const updateRecode = async (technologyId, updateBody) => {
    return Offeritem.findByIdAndUpdate(technologyId, { $set: updateBody });
};

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