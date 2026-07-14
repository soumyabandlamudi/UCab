 const express = require("express");

const router = express.Router();

const {
  addCar,
  getCars,
  getCarById,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const upload = require("../middleware/multer");

router.post("/add", upload.single("image"), addCar);

router.get("/", getCars);

router.get("/:id", getCarById);

router.put("/:id", upload.single("image"), updateCar);

router.delete("/:id", deleteCar);

module.exports = router;