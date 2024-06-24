import User from "../models/userModel.js";
import bcrypt from "bcrypt";

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
