const { User } = require("../db");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const userExists = User.exists({
    username: req.headers.username,
    password: password,
  });
  if (userExists) {
    next();
  } else {
    res.status(401).json({ error: "invalid credentials" });
    return;
  }
}

module.exports = userMiddleware;
