 const Car = require("../models/CarSchema");

// Add Car
const addCar = async (req, res) => {
  try {
    const carData = {
  ...req.body,
};

if (req.file) {
  carData.image = req.file.filename;
}

const car = await Car.create(carData);

    res.status(201).json({
      success: true,
      message: "Car Added Successfully",
      car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    res.status(200).json({
      success: true,
      count: cars.length,
      cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Car
const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Car
const updateCar = async (req, res) => {
  try {
    const updatedData = {
  ...req.body,
};

if (req.file) {
  updatedData.image = req.file.filename;
}

const car = await Car.findByIdAndUpdate(
  req.params.id,
  updatedData,
  { new: true }
);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car Updated Successfully",
      car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Car
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
};