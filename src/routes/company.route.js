const express = require("express");
const { companyValidation } = require("../validation");
const { companyController } = require("../controller");
const validate = require("../middlewares/validate");
const upload  = require("../middlewares/multer");

const router = express.Router();

// create
router.post(
    "/create-company",
    upload.single("image"),
    validate(companyValidation.createCompany),
    companyController.createCompany
);

// list
router.get(
    "/list",
    companyController.companyList
);

// update
router.put(
    "/update/:companyId",
    companyController.updateRecode
);

// delete
router.delete(
    "/delete/:companyId",
    companyController.deleteRecode
);

module.exports = router;