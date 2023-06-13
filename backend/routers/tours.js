import express from "express";
import {
  getTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCount,
} from "../controllers/tourController.js";

const router = express.Router();

// create tour
router.post("/", createTour);
// get all tours
router.get("/", getTours);
// get tour by id
router.get("/:id", getTourById);
// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
// get featured tours
router.get("/search/getFeaturedTours", getFeaturedTours);
// update tour
router.put("/:id", updateTour);
// delete tour
router.delete("/:id", deleteTour);
// get tour counts
router.get("/search/getTourCount", getTourCount);

export default router;
