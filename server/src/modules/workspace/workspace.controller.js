const workspaceService = require("./workspace.service");

exports.createWorkspace = async (req, res) => {
  try {
    const { projectId, name } = req.body;

    if (!projectId || !name) {
      return res.status(400).json({ message: "projectId and name are required" });
    }

    const workspace = await workspaceService.createWorkspace(
      projectId,
      name,
      req.user.id
    );

    res.status(201).json(workspace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getWorkspace = async (req, res) => {
  try {
    const workspace = await workspaceService.getWorkspaceById(req.params.id);

    if (!workspace) {
      return res.status(404).json({ message: "Workspace not found" });
    }

    res.json(workspace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addMember = async (req, res) => {
  try {
    const { userId, role } = req.body;

    if (!userId || !role) {
      return res.status(400).json({ message: "userId and role are required" });
    }

    const workspace = await workspaceService.addMemberToWorkspace(
      req.params.id,
      userId,
      role
    );

    res.json(workspace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
