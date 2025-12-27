const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Real-Time Collaborative Workspace API",
      version: "1.0.0",
      description: "Production-grade MERN backend with real-time collaboration"
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [{ bearerAuth: [] }]
  },
  apis: [path.join(__dirname, "../modules/**/*.js")]
};

module.exports = swaggerJSDoc(options);
