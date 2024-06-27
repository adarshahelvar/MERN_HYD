import express from "express";
import { creteBlog } from "../controller/blogController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();
router.post("/createblog", authenticate, creteBlog);
export default router;
