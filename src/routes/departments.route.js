const express = require("express");
const { departmentValidation } = require("../validation");
const { departmentController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-department",
    validate(departmentValidation.createDepartment),
    departmentController.createDepartment
);

// list
router.get(
    "/list",
    departmentController.departmentList
);

// update
router.put(
    "/update/:departmentId",
    departmentController.updateRecode
);

// delete
router.delete(
    "/delete/:departmentId",
    departmentController.deleteRecode
);

module.exports = router;