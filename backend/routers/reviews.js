import express from "express";
import { getReviews, createReview } from "../controllers/reviewController.js";

import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/");
// create a review
router.post("/:tourId", verifyUser, createReview);
export default router;
