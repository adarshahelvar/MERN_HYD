import express from "express";
import { creteBlog } from "../controller/blogController.js";

const router = express.Router();
router.post("/createblog", creteBlog);
export default router;
