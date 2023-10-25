const jwt = require("jsonwebtoken");

function generateToken(admin) {
  const payload = { id: admin._id, email: admin.email };
  const secretKey = process.env.secretKey;
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secretKey, options);
}

module.exports = generateToken;
