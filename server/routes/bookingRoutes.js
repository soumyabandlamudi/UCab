 const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  bookCab,
  getMyBookings,
  getAllBookings,
  cancelBooking,
} = require("../controllers/bookingController");

router.post("/book", authMiddleware, bookCab);

router.get("/mybookings", authMiddleware, getMyBookings);

router.get("/all", authMiddleware, getAllBookings);

router.put("/cancel/:id", authMiddleware, cancelBooking);

module.exports = router;