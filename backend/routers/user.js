import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// create user
router.post("/", verifyAdmin, createUser);
// get all users
router.get("/", verifyAdmin, getUsers);
// get user by id
router.get("/:id", verifyUser, getUserById);
// update user
router.put("/:id", verifyUser, updateUser);
// delete user
router.delete("/:id", verifyUser, deleteUser);

export default router;
