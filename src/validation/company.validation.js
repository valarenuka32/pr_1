const Joi = require("joi");

// create Company
const createCompany = {
    body: Joi.object().keys({
        name: Joi.string().trim().required(),
        location: Joi.string().trim().required(),
        type: Joi.string().trim().required(),
        time: Joi.string().required(),
        day_of_week: Joi.string().trim().required(),
        image:Joi.string()
    })
};

module.exports = {
    createCompany
};