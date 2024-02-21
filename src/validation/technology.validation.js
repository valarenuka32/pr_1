const Joi = require("joi");

// create Technology
const createTechnology = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
    })
};

module.exports = {
    createTechnology
};