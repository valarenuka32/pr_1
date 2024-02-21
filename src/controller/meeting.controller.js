const { meetingService } = require("../services");

const createMeeting = async (req, res) => {
    try {
        const reqBody = req.body;

        const meeting = await meetingService.createMeeting(reqBody);

        res.status(200).json({
            success: true,
            message: "meeting create successfully!",
            data: { meeting },
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get list
const meetingList = async (req, res) => {
    try {
        const getList = await meetingService.meetingList();

        res.status(200).json({
            success: true,
            message: "Get meeting list successfully!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// update detailes
const updateRecode = async (req, res) => {
    try {
        const meetingId = req.params.meetingId;

        const meetingEx = await meetingService.getMeetingById(meetingId);
        if (!meetingEx) {
            throw new Error("meeting not found");
        }

        await meetingService.updateRecode(meetingId, req.body);
        res.status(200).json({
            success: true,
            message: "meeting detiles update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// delete list
const deleteRecode = async (req, res) => {
    try {
        const meetingId = req.params.meetingId;

        const meetingEx = await meetingService.getMeetingById(meetingId);
        if (!meetingEx) {
            throw new Error("meeting not found");
        };

        await meetingService.deleteRecode(meetingId, req.body);
        res.status(200).json({
            success: true,
            message: "meeting detiles delete successfully !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { createMeeting, meetingList, deleteRecode, updateRecode }