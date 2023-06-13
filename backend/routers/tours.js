import express from "express";
import {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";

const router = express.Router();

// create post
router.post("/", createTour);
// get all posts
router.get("/", getTours);
// get post by id
router.get("/:id", getTourById);
// update post
router.put("/:id", updateTour);
// delete post
router.delete("/:id", deleteTour);

export default router;
