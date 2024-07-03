import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUserProfile,
  updateUser,
} from "../controller/userController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router();
router.put("/updateuser/:id", authenticate, updateUser);
router.delete("/deleteuser/:id", authenticate, deleteUser);
router.get("/getallusers", getAllUser);
router.get("/userprofile", authenticate, getSingleUserProfile);

export default router;
