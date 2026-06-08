const express=require('express');

const router=express.Router();
const connection = require("../db");

router.post('/',(req,res)=>{
const {name,email}=req.body;

connection.query(
    `INSERT into Users(name,email) VALUES (?,?)`,
    [name,email],
    (err,result)=>{
        if(err){
        return res.status(500).send(err);
        }
        res.send("User added successfully");
    }
);
});

router.get('/',(req,res)=>{
    connection.query(
        "Select * from users",
        (err,result)=>{
            if(err){
                return res.status(500).send(err);
            }
            res.json(result);
        }
    );
})

module.exports=router;