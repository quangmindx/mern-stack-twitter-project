const User = require("../models/User");

const registerController = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.json(error);
  }
};
const loginController = async (req, res, next) => {
  try {
  } catch (error) {}
};

module.exports = {
  registerController,
  loginController,
};
