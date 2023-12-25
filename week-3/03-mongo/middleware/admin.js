// Middleware for handling auth

const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const isUserExists = Admin.exists({ username: req.headers.username });
  if (isUserExists) {
    next();
  } else {
    req.status(401).json({ message: "Invalid Credentials" });
    return;
  }
}

module.exports = adminMiddleware;
