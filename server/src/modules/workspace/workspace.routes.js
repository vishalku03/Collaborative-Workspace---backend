const express = require("express");
const router = express.Router();

const controller = require("./workspace.controller");
const auth = require("../../middlewares/auth.middleware");
const rbac = require("../../middlewares/rbac.middleware");

// Create workspace
router.post(
  "/",
  auth,
  rbac(["OWNER", "COLLABORATOR"]),
  controller.createWorkspace
);

// Get workspace by ID
router.get(
  "/:id",
  auth,
  controller.getWorkspace
);

// Add member to workspace
router.post(
  "/:id/members",
  auth,
  rbac(["OWNER"]),
  controller.addMember
);

module.exports = router;
