const Joi = require("joi");

// create project
const createProject = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        start_date: Joi.date().required(),
        end_date: Joi.date().required(),
        Status: Joi.string().required()
    })
};

module.exports = {
    createProject
};