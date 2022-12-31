const express = require("express");
const router = express.Router();
//import controller from controllers folder to be able to use the logic defined there
const { createUser, getUsers } = require("../controllers/userController");

//GET, POST
router.route("/").post(createUser).get(getUsers);

module.exports = router;
