const Joi = require("joi");

// create Client
const createClient = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        Phone_number: Joi.date().required(),
        location: Joi.string().required()
    })
};

module.exports = {
    createClient
};