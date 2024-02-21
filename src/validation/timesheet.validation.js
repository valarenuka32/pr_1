const Joi = require("joi");

// create Timesheet
const createTimesheet = {
    body: Joi.object().keys({
        date: Joi.date().required(),
        hours_work: Joi.number().required(),
        Status: Joi.string().trim().required(),
        employee: Joi.string().required(),
        task: Joi.string().required(),
    })
};

module.exports = {
    createTimesheet
};