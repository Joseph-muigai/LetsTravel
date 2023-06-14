import express from "express";
import { verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBookings,
  getBooking,
} from "../controllers/bookingController.js";
const router = express.Router();

// create a booking
router.post("/", verifyUser, createBooking);
// get booking by id
router.get("/:id", verifyUser, getBooking);
// get all bookings
router.get("/", verifyUser, getAllBookings);
export default router;
