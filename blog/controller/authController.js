import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "2d",
    }
  );
};

export const registerUser = async (req, res, next) => {
  const { name, age, email, password, phone, address } = req.body;
  try {
    let user = await User.findOne({ email: email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashdPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      age,
      email,
      password: hashdPassword,
      phone,
      address,
    });
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully..." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const login = async (req, res, next) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email: email });

    // console.log(user);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // Compare will take two parameters, 1-> Password from user/Postman/Frontend 2-> Password from database

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }
    const token = generateToken(user);

    // Login user
    const { password, role, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "Login successfull",
      token,
      date: { ...rest },
      role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to login" });
  }
};
