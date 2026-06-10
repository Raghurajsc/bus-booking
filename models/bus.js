const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Bus = sequelize.define("Bus", {
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Bus;