const { user } = require("../models");

const register = async (reqBody) => {
    return user.create(reqBody)
};

const getUserByEmail = async (email) => {
    return user.findById(email)
}

module.exports = { register ,
    getUserByEmail};