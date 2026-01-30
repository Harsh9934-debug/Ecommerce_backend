const express = require("express");
const User=require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;

    try {
        let user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        user = new User({name,email,password});
        await user.save();

        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
})

module.exports = router;
