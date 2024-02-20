const { user } = require("../models");

const register = async (reqBody) => {
    return user.create(reqBody)
};

const findUser = async (email) => {
    return user.findOne({ email })
};

const userList = async () => {
    return user.find()
};

const getUserById = async (userId) => {
    return user.findById(userId)
};

const updateRecode = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody })
};

const deleteRecode = async (userId) => {
    return user.findByIdAndDelete(userId)
};



module.exports = { register, findUser, getUserById, deleteRecode, updateRecode, userList };