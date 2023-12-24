const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";
const secret = "123456";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const token = jwt.sign({ username: username }, jwtPassword);
  return token;
}

function verifyJwt(token) {
  try {
    const response = jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}

function decodeJwt(token) {
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
