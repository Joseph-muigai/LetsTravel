import express from "express";
import {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
  getTourBySearch,
} from "../controllers/tourController.js";

const router = express.Router();

// create post
router.post("/", createTour);
// get all posts
router.get("/", getTours);
// get post by id
router.get("/:id", getTourById);
// get post by search
router.get("/search/getTourBySearch", getTourBySearch);
// update post
router.put("/:id", updateTour);
// delete post
router.delete("/:id", deleteTour);

export default router;
