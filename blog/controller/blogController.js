import Blog from "../models/blogModel.js";
import User from "../models/userModel.js";

export const creteBlog = async (req, res, next) => {
  const { title, content, topic } = req.body;
  console.log(req.body);
};
