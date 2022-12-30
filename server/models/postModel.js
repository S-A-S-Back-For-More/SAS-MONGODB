const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authorID: {
    type: String,
  },
});

//export to controllers!!!
module.exports = mongoose.model("Post", postSchema);
