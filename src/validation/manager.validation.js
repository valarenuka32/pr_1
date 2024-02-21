const Joi = require("joi");

// create Manager
const createManager = {
    body: Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        phone_number: Joi.number().required()
    })
};

module.exports = {
    createManager
};