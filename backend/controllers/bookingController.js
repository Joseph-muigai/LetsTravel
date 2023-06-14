import Booking from "../models/Booking.js";

// @desc    Create a booking
// @route   POST /booking
// @access  Private
export const createBooking = async (req, res, next) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(201).json({
      success: true,
      message: "Your tour has been succesfully booked!",
      data: savedBooking,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
// @desc    Get all bookings
// @route   GET /booking
// @access  Private
export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
      //   message: "No bookings found",
    });
  }
};

// @desc    Get a booking
// @route   GET /booking/:id
// @access  Private
export const getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
      //   message: "No booking found",
    });
  }
};
