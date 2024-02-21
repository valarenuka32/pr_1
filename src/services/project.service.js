const { project } = require("../models");

// create project
const createProject = async (reqBody) => {
    return project.create(reqBody);
};

// all project list
const projectList = async (req, res) => {
    return project.find()
};

// get project by id
const getProjectById = async (projectId) => {
    return project.findById(projectId);
};

// project detalis update by id
const updateRecode = async (projectId, updateBody) => {
    return Offeritem.findByIdAndUpdate(projectId, { $set: updateBody });
};

// project details delete by id
const deleteRecode = async (projectId) => {
    return Offeritem.findByIdAndDelete(projectId);
};

module.exports = {
    createProject,
    projectList,
    getProjectById,
    updateRecode,
    deleteRecode
};