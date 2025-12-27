const bcrypt = require("bcryptjs");
const User = require("./user.model");
const {
  signAccessToken,
  signRefreshToken
} = require("../../utils/jwt");

exports.registerUser = async (data) => {
  const hashed = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hashed });
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;

  const accessToken = signAccessToken({
    id: user._id,
    role: user.role
  });

  const refreshToken = signRefreshToken({
    id: user._id
  });

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
};

exports.refreshAccessToken = async (refreshToken) => {
  const user = await User.findOne({ refreshToken });
  if (!user) return null;

  const accessToken = signAccessToken({
    id: user._id,
    role: user.role
  });

  return accessToken;
};
