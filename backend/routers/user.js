import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = express.Router();

// create user
router.post("/", createUser);
// get all users
router.get("/", getUsers);
// get user by id
router.get("/:id", getUserById);
// update user
router.put("/:id", updateUser);
// delete user
router.delete("/:id", deleteUser);

export default router;
