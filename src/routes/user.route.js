const express = require("express");
const { userController } = require("../controller");
const { uservalidation } = require("../validation");
const validate = require("../middlewares/validate");
const { autheticate } = require("../middlewares/auth");
const router = express.Router();

// user register
router.post(
    "/register",
    validate(uservalidation.register),
    userController.register
);

// user login
router.post(
    "/login",
    autheticate,
    userController.login
);

//get user list
router.get(
    "/user-list",
    userController.userList
);

// user detiles update
router.put(
    "/user-update/:userId",
    userController.updateRecode
);

// user detiles delete
router.delete(
    "/user-delete/:userId",
    userController.deleteRecode
);

module.exports = router;