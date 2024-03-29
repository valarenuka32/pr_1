const Joi = require("joi");

// create Department
const createDepartment = {
    body: Joi.object().keys({
        department_name: Joi.string().trim().required(),
        manager: Joi.string().required()
    })
};

module.exports = {
    createDepartment
};