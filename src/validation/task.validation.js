const Joi = require("joi");

// create task
const createTask = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        deadline: Joi.date().required(),
        Status: Joi.string().trim().required(),
        project: Joi.string().required(),
        employee: Joi.string().required(),
    })
};

module.exports = {
    createTask
};