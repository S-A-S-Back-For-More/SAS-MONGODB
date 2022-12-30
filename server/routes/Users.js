const express = require("express");
const router = express.Router();
//import controller from controllers folder to be able to use the logic defined there
const { createUser } = require("../controllers/userController");

//GET, POST
router.route("/").post(createUser);

module.exports = router;
