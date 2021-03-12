const jwt = require("jsonwebtoken");
const { NativeError } = require("mongoose");

const verifyToken = (req, res, next) => {
  // Access Authorization from request header
  const Authorization = req.header("authorization");
  if (!Authorization) {
    // Error: un authoriza
  }

  // get token
  const token = Authorization.replace("Bearer ", "");

  // verify token
  const { userId } = jwt.verify(token, process.env.APP_SECRET);
  // Assign req;
  req.user = { userId };
  next();
};
module.exports = verifyToken;
