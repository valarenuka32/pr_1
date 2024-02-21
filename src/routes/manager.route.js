const express = require("express");
const { managerValidation } = require("../validation");
const { managerController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-manager",
    validate(managerValidation.createManager),
    managerController.createManager
);

// list
router.get(
    "/list",
    managerController.managerList
);

// update
router.put(
    "/update/:managerId",
    managerController.updateRecode
);

// delete
router.delete(
    "/delete/:managerId",
    managerController.deleteRecode
);

module.exports = router;