const { client } = require("../models");

// create client
const createClient = async (reqBody) => {
    return client.create(reqBody);
};

// get all list
const clientList = async (req, res) => {
    return client.find()
};

// get client by id
const getclientById = async (clientId) => {
    return client.findById(clientId);
};

//  client details update by id
const updateRecode = async (clientId, updateBody) => {
    return Offeritem.findByIdAndUpdate(clientId, { $set: updateBody });
};

//  client details delete by id
const deleteRecode = async (clientId) => {
    return Offeritem.findByIdAndDelete(clientId);
};

module.exports = {
    createClient,
    clientList,
    getclientById,
    updateRecode,
    deleteRecode
};