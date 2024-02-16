const { user } = require("../models");

const register = (reqBody) => {
    return user.create(reqBody)
};

module.exports = { register };