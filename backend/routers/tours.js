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

import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// create tour
router.post("/", verifyAdmin, createTour);
// get all tours
router.get("/", getTours);
// get tour by id
router.get("/:id", getTourById);
// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
// get featured tours
router.get("/search/getFeaturedTours", getFeaturedTours);
// update tour
router.put("/:id", verifyAdmin, updateTour);
// delete tour
router.delete("/:id", verifyAdmin, deleteTour);
// get tour counts
router.get("/search/getTourCount", getTourCount);

export default router;
