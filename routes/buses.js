const router = require("express").Router();
const controller = require("../controllers/bus.controller");
const bookingController = require("../controllers/booking.controller");

router.post("/", controller.createBus);
router.get("/available/:seats", controller.getAvailableBuses);

router.get("/:id/bookings", bookingController.getBusBookings);

module.exports = router;