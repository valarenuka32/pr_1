const Joi = require("joi");

// create Technology
const createTechnology = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
    })
};

module.exports = {
    createTechnology
};