const Joi = require("joi");

// create Meeting
const createMeeting = {
    body: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        date: Joi.date().required(),
        time: Joi.string().required(),
        Location: Joi.string().required(),
        Status: Joi.string().required(),
    })
};

module.exports = {
    createMeeting
};