import express from "express";
import {
  creteBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
} from "../controller/blogController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();
router.post("/createblog", creteBlog);
router.get("/getallblog", getAllBlogs);
router.get("/getsingleblog/:id", getSingleBlog);
router.delete("/deleteblog/:id", authenticate, deleteBlog);
router.put("/updateblog/:id", authenticate, updateBlog);
export default router;
