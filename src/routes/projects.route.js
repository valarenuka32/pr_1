const express = require("express");
const { projectValidation } = require("../validation");
const { projectController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-project",
    validate(projectValidation.createProject),
    projectController.createProject
);

// list
router.get(
    "/list",
    projectController.projectList
);

// update
router.put(
    "/update/:projectId",
    projectController.updateRecode
);

// delete
router.delete(
    "/delete/:projectId",
    projectController.deleteRecode
);

module.exports = router;