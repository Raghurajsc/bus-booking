const express=require('express');
const mysql=require('mysql2');

const app=express();

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Raghuraj@1',
    database:'college'
});

connection.connect((err)=>{
    if(err){
        console.log(err);
        return ;

    }
    console.log("Database connected");

    connection.query(`
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255)
        )
        
        `);

        connection.query(`
            CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255),
            totalSeats INT,
            availableSeats INT
        )
            
            `);

            connection.query(`
                 CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT
        )
                
                
                `);


                connection.query(`
                    CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10,2),
            paymentStatus VARCHAR(255)
        )
                    
                    `);

                    console.log("Table created");
});

app.get("/",(req,res)=>{
    res.send("Bus booking system");
});

app.listen(3000,()=>{
     console.log("Server is running on port 3000");
});