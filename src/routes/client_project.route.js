const express = require("express");
const { client_projectValidation } = require("../validation");
const { client_projectController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-client_project",
    validate(client_projectValidation.createClient_project),
    client_projectController.createClient_project
);

// list
router.get(
    "/list",
    client_projectController.client_projectList
);

// update
router.put(
    "/update/:client_projectId",
    client_projectController.updateRecode
);

// delete
router.delete(
    "/delete/:client_projectId",
    client_projectController.deleteRecode
);

module.exports = router;