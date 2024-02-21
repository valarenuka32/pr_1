const Joi = require("joi");

// create Client_project
const createClient_project = {
    body: Joi.object().keys({
        client: Joi.string().required(),
        project: Joi.string().required()
    })
};

module.exports = {
    createClient_project
};