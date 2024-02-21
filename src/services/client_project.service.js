const { client_project } = require("../models");

// create client_project
const createClient_project = async (reqBody) => {
    return client_project.create(reqBody);
};

// get all list
const client_projectList = async (req, res) => {
    return client_project.find()
};

// get client_project by id
const getClient_projectById = async (client_projectId) => {
    return client_project.findById(client_projectId);
};

//  client_project details update by id
const updateRecode = async (client_projectId, updateBody) => {
    return Offeritem.findByIdAndUpdate(client_projectId, { $set: updateBody });
};

// client_project details delete by id
const deleteRecode = async (client_projectId) => {
    return Offeritem.findByIdAndDelete(client_projectId);
};

module.exports = {
    createClient_project,
    client_projectList,
    getClient_projectById,
    updateRecode,
    deleteRecode
};