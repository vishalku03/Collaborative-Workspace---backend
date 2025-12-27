const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env");

exports.signAccessToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });

exports.signRefreshToken = (payload) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

exports.verifyToken = (token) =>
  jwt.verify(token, JWT_SECRET);
