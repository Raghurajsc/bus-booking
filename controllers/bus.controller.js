const Bus = require("../models/Bus");

// INSERT BUS
exports.createBus = async (req, res) => {
    try {
        const bus = await Bus.create(req.body);
        res.json(bus);
    } catch (err) {
        res.status(500).json(err);
    }
};

// GET AVAILABLE BUSES
exports.getAvailableBuses = async (req, res) => {
    try {
        const seats = req.params.seats;

        const buses = await Bus.findAll({
            where: {
                availableSeats: {
                    [Op.gt]: seats
                }
            }
        });

        res.json(buses);
    } catch (err) {
        res.status(500).json(err);
    }
};