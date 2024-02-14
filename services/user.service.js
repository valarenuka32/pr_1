const { user } = require("../models");

const register = (body) => {
    return user.create(body)
};

module.exports = {
    register
};