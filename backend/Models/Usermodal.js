const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: { required: true, type: String },
    lastName: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    password: { required: true, type: String },

});
module.exports = mongoose.model("User", userSchema);
