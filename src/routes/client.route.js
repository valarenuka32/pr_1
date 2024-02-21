const express = require("express");
const { clientValidation } = require("../validation");
const { clientController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

// create
router.post(
    "/create-client",
    validate(clientValidation.createClient),
    clientController.createClient
);

// list
router.get(
    "/list",
    clientController.clientList
);

// update
router.put(
    "/update/:clientId",
    clientController.updateRecode
);

// delete
router.delete(
    "/delete/:clientId",
    clientController.deleteRecode
);

module.exports = router;