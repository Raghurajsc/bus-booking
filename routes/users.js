const router = require("express").Router();
const controller = require("../controllers/user.controller");
const bookingController = require("../controllers/booking.controller");

router.post("/", controller.createUser);
router.get("/", controller.getUsers);

router.get("/:id/bookings", bookingController.getUserBookings);

module.exports = router;