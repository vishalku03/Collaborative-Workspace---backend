const { createProject } = require("./project.service");

exports.create = async (req, res) => {
  const project = await createProject(req.body.name, req.user.id);
  res.status(201).json(project);
};
