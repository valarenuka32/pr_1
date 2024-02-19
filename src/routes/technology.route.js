const express = require("express");
const { technologyValidation } = require("../validation");
const { technologyController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-technology",
    validate(technologyValidation.createTechnology),
    technologyController.createTechnology
);

// list
router.get(
    "/list",
    technologyController.technologyList
);

// update
router.put(
    "/update-technology/:technologyId",
    technologyController.updateRecode
);

// delete
router.delete(
    "/delete-technology/:technologyId",
    technologyController.deleteRecode
);

module.exports = router;