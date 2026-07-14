 const express = require("express");

const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  adminProfile,
} = require("../controllers/adminController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.get("/profile", authMiddleware, adminProfile);

module.exports = router;