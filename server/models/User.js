const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name must be required"],
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "User name must be required"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email must be required"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Password must be required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true }
);

// middlewares

// Hash password
userSchema.pre("save", function (next) {
  let user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
