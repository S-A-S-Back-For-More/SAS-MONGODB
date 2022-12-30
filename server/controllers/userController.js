const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const { user } = require("../routes/Users");
const createUser = asyncHandler(async (req, res) => {
  const user = await User.create({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  res.json(user);
});
module.exports = { createUser };
