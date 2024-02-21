const { meeting } = require("../models");

// create meeting
const createMeeting = async (reqBody) => {
    return meeting.create(reqBody);
};

// get all list
const meetingList = async (req, res) => {
    return meeting.find()
};

// get meeting by id
const getmeetingById = async (meetingId) => {
    return meeting.findById(meetingId);
};

// meeting details update by id
const updateRecode = async (meetingId, updateBody) => {
    return Offeritem.findByIdAndUpdate(meetingId, { $set: updateBody });
};

// meeting details delete by id
const deleteRecode = async (meetingId) => {
    return Offeritem.findByIdAndDelete(meetingId);
};

module.exports = {
    createMeeting,
    meetingList,
    getmeetingById,
    updateRecode,
    deleteRecode
};