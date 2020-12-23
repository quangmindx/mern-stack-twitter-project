const express = require("express");
const Route = express.Router();
const {
  registerController,
  loginController,
} = require("../controllers/authController");

Route.route("/register").post(registerController);
Route.route("/login").post(loginController);

module.exports = Route;
