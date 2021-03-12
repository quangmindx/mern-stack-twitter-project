const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerController = async (req, res, next) => {
  try {
    console.log("register route");
    const user = await User.create(req.body);
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET); // create toke with userId
    res.status(200).json({
      status: "success",
      data: { token, fullName: user.name, userName: user.username },
    });
  } catch (error) {
    res.json(error);
  }
};
const loginController = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // Error: Email is not correct
      return res.json({
        message: "Email is not correct",
      });
    }
    const isPasswordCompare = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (isPasswordCompare && user) {
      const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET); // create toke with userId
      res.status(200).json({
        status: "success",
        data: { token, fullName: user.name, userName: user.username },
      });
    } else {
      // Error: Password is not match
      res.json({
        message: "Password is not match",
      });
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerController,
  loginController,
};
