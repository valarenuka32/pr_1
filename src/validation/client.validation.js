const Joi = require("joi");

// create Client
const createClient = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        Phone_number: Joi.number().required(),
        location: Joi.string().trim().required()
    })
};

module.exports = {
    createClient
};