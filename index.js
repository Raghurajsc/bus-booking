const express = require("express");
const sequelize = require("./db/sequelize");

const app = express();
app.use(express.json());

// ✅ IMPORT ALL MODELS FIRST
require("./models");
require("./models/Payment");

// routes
app.use("/users", require("./routes/users.js"));
app.use("/buses", require("./routes/buses.js"));
app.use("/bookings", require("./routes/bookings"));

sequelize.sync({ alter: true })   // 🔥 IMPORTANT FIX
    .then(() => console.log("DB Synced"))
    .catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});