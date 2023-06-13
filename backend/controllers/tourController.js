import Tour from "../models/Tour.js";

// @desc    Get all tours
// @route   GET /api/tours
// @access  Public
const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({});

    res.status(200).json({
      success: true,
      message: "Tours found",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single tour
// @route   GET /api/tours/:id
// @access  Public
const getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Tour found",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create tour
// @route   POST /api/tours
// @access  Private/Admin
const createTour = async (req, res) => {
  try {
    const tour = new Tour({
      title: req.body.title,
      city: req.body.city,
      address: req.body.address,
      distance: req.body.distance,
      photo: req.body.photo,
      desc: req.body.desc,
      price: req.body.price,
      maxGroupSize: req.body.maxGroupSize,
      featured: req.body.featured,
    });

    const createdTour = await tour.save();
    console.log(createdTour);

    res.status(201).json({
      success: true,
      message: "Tour succesfully created",
      data: createdTour,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update tour
// @route   PUT /api/tours/:id
// @access  Private/Admin
const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (updatedTour) {
      res.status(200).json({
        success: true,
        message: "Tour updated",
        data: updatedTour,
      });
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete tour
// @route   DELETE /api/tours/:id
// @access  Private/Admin
const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    if (deletedTour) {
      res.status(200).json({
        success: false,
        message: "Tour succesfully removed",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "failed to delete",
      error,
    });
  }
};

export { getTours, getTourById, createTour, updateTour, deleteTour };
