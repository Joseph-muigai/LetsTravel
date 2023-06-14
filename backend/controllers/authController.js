import User from "../models/User.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @desc    Register user
// @route   POST /users/register
// @access  Public
export const register = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      photo: req.body.photo,
      role: req.body.role,
    });
    // hash password
    const salt = await bycrypt.genSalt(10);
    newUser.password = await bycrypt.hash(newUser.password, salt);
    // save user
    await newUser.save();
    // create token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    // send token in cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(201).json({
      success: true,
      message: "User created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Login user
// @route   POST /users/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    // check if password is correct
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const { userPassword, role, ...rest } = user._doc;

    // create token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );
    // send token in the browser cookie and send the response to the client
    res.cookie("accessToken", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.status(200).json({
      success: true,
      message: "User logged in",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
