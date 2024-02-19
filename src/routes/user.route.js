const express = require("express");
const { userController } = require("../controller");
const { uservalidation } = require("../validation");
const validate = require("../middlewares/validate");
const router = express.Router();

router.post(
    "/register",
    validate(uservalidation.register),
    userController.register
);
// router.post(
//     "/login",
//     userController.login
// );

module.exports = router;