const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Booking = sequelize.define("Booking", {
    seatNumber: DataTypes.INTEGER
}, {
    timestamps: false
});

module.exports = Booking;