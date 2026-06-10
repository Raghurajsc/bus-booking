const { Booking, Bus, User } = require("../models");

exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        res.status(201).json(booking);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            where: {
                userId: req.params.id
            },
            include: [{
                model: Bus
            }]
        });

        res.json(bookings);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

exports.getBusBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            where: {
                busId: req.params.id
            },
            include: [{
                model: User
            }]
        });

        res.json(bookings);

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};