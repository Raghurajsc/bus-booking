const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bus_booking_db", "root", "Raghuraj@1", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;