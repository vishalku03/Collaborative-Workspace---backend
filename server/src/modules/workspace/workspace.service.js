const Workspace = require("./workspace.model");

exports.createWorkspace = async (projectId, name, userId) => {
  return Workspace.create({
    projectId,
    name,
    members: [{ userId, role: "OWNER" }]
  });
};

exports.getWorkspaceById = async (workspaceId) => {
  return Workspace.findById(workspaceId)
    .populate("members.userId", "email role");
};

exports.addMemberToWorkspace = async (workspaceId, userId, role) => {
  return Workspace.findByIdAndUpdate(
    workspaceId,
    {
      $push: { members: { userId, role } }
    },
    { new: true }
  );
};
