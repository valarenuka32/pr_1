const Joi = require("joi");

// create project
const createProject = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        Status: Joi.string().trim().required()
    })
};

module.exports = {
    createProject
};