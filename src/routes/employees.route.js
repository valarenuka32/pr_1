const express = require("express");
const { employeeValidation } = require("../validation");
const { employeeController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-employee",
    validate(employeeValidation.createEmployee),
    employeeController.createEmployee
);

// list
router.get(
    "/list",
    employeeController.employeeList
);

// update
router.put(
    "/update/:employeeId",
    employeeController.updateRecode
);

// delete
router.delete(
    "/delete/:employeeId",
    employeeController.deleteRecode
);

module.exports = router;