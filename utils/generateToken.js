const jwt = require("jsonwebtoken");

function generateToken(data) {
  const payload = { id: data._id, email: data.email };
  const secretKey = process.env.secretKey;
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secretKey, options);
}

module.exports = generateToken;
