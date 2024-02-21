const Joi = require("joi");

// create Manager
const createManager = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        password: Joi.string().trim().required(),
        phone_number: Joi.number().required()
    })
};

module.exports = {
    createManager
};