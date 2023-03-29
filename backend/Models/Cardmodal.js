const mongoose = require("mongoose");
const cardSchema = mongoose.Schema({
  title: { required: true, type: String },
  name: { required: true, type: String },
  content: { required: true, type: String },
  date: { required: true, type: String },
});
module.exports = mongoose.model("ShowActivity", cardSchema);