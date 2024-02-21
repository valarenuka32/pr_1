const Joi = require("joi");

// create Employee
const createEmployee = {
    body: Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        phone_number: Joi.number().required(),
        hire_date: Joi.date().required(),
        position: Joi.string().required(),
        salary: Joi.number().required(),
        department: Joi.string().required(),
    })
};

module.exports = {
    createEmployee
};


