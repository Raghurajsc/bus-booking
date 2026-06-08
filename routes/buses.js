const express=require('express');
const router=express.Router();
const connection=require('../db');

router.post('/',(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body;
     
     const query =
    "INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ?, ?)";

  connection.query(
    query,
    [busNumber, totalSeats, availableSeats],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        message: "Bus added successfully",
        id: result.insertId,
      });
    }
  );
});

router.get("/available/:seats", (req, res) => {
    const seats = req.params.seats;

    connection.query(
        "SELECT * FROM Buses WHERE availableSeats > ?",
        [seats],
        (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            res.json(result);
        }
    );
});

module.exports = router;