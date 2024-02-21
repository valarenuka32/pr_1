const Joi = require("joi");

// user
const register = {
    body: Joi.object().keys({
        first_name: Joi.string().trim().required(),
        last_name: Joi.string().trim().required(),
        email: Joi.string().trim().required(),
        phone_no: Joi.number().trim().required(),
        password: Joi.string().trim().required(),
        role:Joi.string(),
        address: Joi.string().trim().required(),
    })
};

module.exports = {
    register
};