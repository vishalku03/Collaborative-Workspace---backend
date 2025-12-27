const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["OWNER", "COLLABORATOR", "VIEWER"],
    default: "OWNER"
  },
  refreshToken: {
    type: String
  }
});

module.exports = mongoose.model("User", userSchema);
