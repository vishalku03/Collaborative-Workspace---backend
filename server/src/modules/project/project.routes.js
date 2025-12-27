const router = require("express").Router();
const auth = require("../../middlewares/auth.middleware");
const rbac = require("../../middlewares/rbac.middleware");
const controller = require("./project.controller");

router.post("/", auth, rbac(["OWNER"]), controller.create);

module.exports = router;
