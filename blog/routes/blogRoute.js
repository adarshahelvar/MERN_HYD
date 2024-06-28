import express from "express";
import {
  creteBlog,
  deleteBlog,
  getAllBlogs,
  getSingleBlog,
} from "../controller/blogController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();
router.post("/createblog", authenticate, creteBlog);
router.get("/getallblog", getAllBlogs);
router.get("/getsingleblog/:id", getSingleBlog);
router.delete("/deleteblog/:id", authenticate, deleteBlog);
export default router;
