const jwt = require("jsonwebtoken");
const createAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_ACC_TOKEN_KEY,
    {
      expiresIn: "15m",
    }
  );
};

const createRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      tokenversion: user.tokenversion,
    },
    process.env.JWT_REF_TOKEN_KEY,
    {
      expiresIn: "7d",
    }
  );
};

const jwtVerify = (token, secret) => {
  return jwt.verify(token, secret);
};

module.exports = { createRefreshToken, createAccessToken, jwtVerify };
