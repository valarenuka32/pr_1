const express = require("express");
const { taskValidation } = require("../validation");
const { taskController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-task",
    validate(taskValidation.createTask),
    taskController.createTask
);

// list
router.get(
    "/list",
    taskController.taskList
);

// update
router.put(
    "/update/:taskId",
    taskController.updateRecode
);

// delete
router.delete(
    "/delete/:taskId",
    taskController.deleteRecode
);

module.exports = router;