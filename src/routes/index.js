const express = require("express");
const router = express.Router();

const userRouter = require("./user.route");
const timesheetRouter = require("./timesheet.route");
const technologyRouter = require("./technology.route");


router.use("/user", userRouter);
router.use("/timesheet", timesheetRouter);
router.use("/technology", technologyRouter);

module.exports = router;