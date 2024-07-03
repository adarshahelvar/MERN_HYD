import User from "../models/userModel.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updateUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not foud...!" });
    }

    res.status(200).json({
      success: true,
      message: "User info updated...",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to update...!" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    if (!userId) {
      return res
        .status(404)
        .json({ success: false, message: "User not foud...!" });
    }
    await User.findByIdAndDelete(userId);
    return res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete user" });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ success: true, message: "Users found", data: users });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getSingleUserProfile = async (req, res, next) => {
  const idUser = req.userId;
  // console.log(idUser);
  try {
    const user = await User.findById(idUser);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;
    res
      .status(200)
      .json({ success: true, message: "User info found", data: { ...rest } });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
