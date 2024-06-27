import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";

export const creteBlog = async (req, res, next) => {
  const { title, content, topic } = req.body;
  const userId = req.userId;

  const user = await User.findById(userId);
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "user does not exist" });
  }
  try {
    let blog = new Blog({
      title,
      content,
      topic,
      user: {
        id: userId,
        name: user.name,
      },
    });
    await blog.save();
    res
      .status(200)
      .json({ success: true, message: "Blog created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong...!" });
  }
};
