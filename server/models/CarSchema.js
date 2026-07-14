 const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "CNG"],
      required: true,
    },

    seats: {
      type: Number,
      required: true,
    },

    pricePerKm: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);