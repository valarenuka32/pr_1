const Joi = require("joi");

// create task
const createTask = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        deadline: Joi.date().required(),
        Status: Joi.string().required(),
        project: Joi.string().required(),
        employee: Joi.string().required(),
    })
};

module.exports = {
    createTask
};