const authService = require("./auth.service");
const { registerSchema } = require("./auth.schema");

exports.register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const user = await authService.registerUser({
    email: req.body.email.trim(),
    password: req.body.password.trim()
  });

  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const email = req.body.email?.trim();
  const password = req.body.password?.trim();

  const result = await authService.loginUser(email, password);

  if (!result) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json(result);
};

exports.refresh = async (req, res) => {
  const { refreshToken } = req.body || {};

  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token is required"
    });
  }

  const accessToken = await authService.refreshAccessToken(refreshToken);

  if (!accessToken) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }

  res.json({ accessToken });
};
