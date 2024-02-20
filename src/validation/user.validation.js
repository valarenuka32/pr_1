const Joi = require("joi");

// user
const register = {
    body: Joi.object().keys({
        first_name: Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required(),
        phone_no: Joi.number().required(),
        password: Joi.string(),
        role:Joi.string(),
        address: Joi.string().required().trim(),
    })
};

module.exports = {
    register
};