const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// here SWAGGER FIRST
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ROUTES After 
app.use("/api/v1/auth", require("./modules/auth/auth.routes"));
app.use("/api/v1/projects", require("./modules/project/project.routes"));
app.use("/api/v1/workspaces", require("./modules/workspace/workspace.routes"));

module.exports = app;
