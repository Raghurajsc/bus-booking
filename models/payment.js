const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Payment = sequelize.define("Payment", {
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING
}, {
    timestamps: false
});

module.exports = Payment;