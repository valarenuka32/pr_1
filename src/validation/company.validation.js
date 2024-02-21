const Joi = require("joi");

// create Company
const createCompany = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        location: Joi.string().required(),
        type: Joi.date().required(),
        time: Joi.string().required(),
        day_of_week: Joi.string().required()
    })
};

module.exports = {
    createCompany
};