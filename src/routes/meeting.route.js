const express = require("express");
const { meetingValidation } = require("../validation");
const { meetingController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-meeting",
    validate(meetingValidation.createMeeting),
    meetingController.createMeeting
);

// list
router.get(
    "/list",
    meetingController.meetingList
);

// update
router.put(
    "/update/:meetingId",
    meetingController.updateRecode
);

// delete
router.delete(
    "/delete/:meetingId",
    meetingController.deleteRecode
);

module.exports = router;