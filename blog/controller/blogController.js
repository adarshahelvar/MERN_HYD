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

export const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({ success: true, message: "Blogs found", data: blog });
  } catch (error) {
    res.status(404).json({ success: false, message: "Blogs not found" });
  }
};

export const getSingleBlog = async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.status(200).json({ success: true, message: "Blogs found", data: blog });
  } catch (error) {
    res.status(404).json({ success: false, message: "Blog not found" });
  }
};

export const deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  const userId = req.userId;
  try {
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res
        .status(500)
        .json({ success: false, message: "No blog found with this ID" });
    }

    // console.log("userId", userId);
    // console.log(blog.user.id);
    if (blog.user.id.toString() !== userId.toString()) {
      res.status(403).json({
        success: false,
        message: "Unauthorized: You can't delete this blog.",
      });
    }

    await Blog.findByIdAndDelete(blogId);
    res.status(200).json({ success: true, message: "Blog Deleted" });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
