const express = require("express");
const router = express.Router();

const userRouter = require("./user.route");
const timesheetRouter = require("./timesheet.route");
const technologyRouter = require("./technology.route");
const taskRouter = require("./task.route");
const projectRouter = require("./projects.route");
const meetingRouter = require("./meeting.route");
const managerRouter = require("./manager.route");
const employeesRouter = require("./employees.route");
const departmentRouter = require("./departments.route");
const companyRouter = require("./company.route");
const clientRouter = require("./client.route");
const client_projectRouter = require("./client_project.route");


router.use("/user", userRouter);
router.use("/timesheet", timesheetRouter);
router.use("/technology", technologyRouter);
router.use("/task", taskRouter);
router.use("/project", projectRouter);
router.use("/meeting", meetingRouter);
router.use("/manager", managerRouter);
router.use("/employees", employeesRouter);
router.use("/department", departmentRouter);
router.use("/company", companyRouter);
router.use("/client", clientRouter);
router.use("/client_project", client_projectRouter);

module.exports = router;