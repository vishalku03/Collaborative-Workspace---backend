const Project = require("./project.model");

exports.createProject = (name, owner) => {
  return Project.create({ name, owner });
};
