const Joi = require("joi");

// create Meeting
const createMeeting = {
    body: Joi.object().keys({
        title: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        date: Joi.date().required(),
        time: Joi.string().required(),
        Location: Joi.string().trim().required(),
        Status: Joi.string().trim().required(),
    })
};

module.exports = {
    createMeeting
};