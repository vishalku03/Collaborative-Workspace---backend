
const mongoose = require("mongoose");

const workspaceSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User"
        },
        role: {
          type: String,
          enum: ["OWNER", "COLLABORATOR", "VIEWER"],
          default: "VIEWER"
        }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Workspace", workspaceSchema);
