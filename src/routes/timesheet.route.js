const express = require("express");
const { timesheetValidation } = require("../validation");
const { timesheetController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-timesheet",
    validate(timesheetValidation.createTimesheet),
    timesheetController.createTimesheet
);

// list
router.get(
    "/list",
    timesheetController.timesheetList
);

// update
router.put(
    "/update-timesheet/:timesheetId",
    timesheetController.updateRecode
);

// delete
router.delete(
    "/delete-timesheet/:timesheetId",
    timesheetController.deleteRecode
);

module.exports = router;