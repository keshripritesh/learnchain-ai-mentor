const User = require("../models/user");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login is handled by Passport in route
const loginSuccess = (req, res) => {
  res.status(200).json({ success: true, user: req.user });
};

const logout = (req, res) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.status(200).json({ success: true, message: "Logged out" });
  });
};

module.exports = {
  register,
  loginSuccess,
  logout,
};
