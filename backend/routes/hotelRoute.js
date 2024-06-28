// routes/hotelRoutes.js
const express = require("express");
const {
  getHotels,
  getHotelById,
  createHotel,
  deleteHotel,
  updateHotel
} = require("../controllers/hotelController");
const router = express.Router();

router.get("/", getHotels);
router.get("/:hotelId", getHotelById);
router.post("/", createHotel);
router.delete("/:hotelId", deleteHotel);
router.put("/:hotelId", updateHotel);

module.exports = router;
