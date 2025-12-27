const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  owner: mongoose.Schema.Types.ObjectId,
  collaborators: [{
    userId: mongoose.Schema.Types.ObjectId,
    role: String
  }]
});

module.exports = mongoose.model("Project", projectSchema);
