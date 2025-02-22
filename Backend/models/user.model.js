const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,       
    required: true,
    minLength: [3, "Firstname must be at least 3 characters long"],
  },
  lastname: {
    type: String,
    minLength: [3, "Lastname must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be at least 5 characters long"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
    default: null,
  },
});

// 🔐 Generate JWT Token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  return token;
};

// 🔑 Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// 🔐 Hash Password
userSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
