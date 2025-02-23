import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup =  async(req, res) => {
    try{
        const {name, username, email, password} = req.body;
        const existingEmail = await User.findOne({email});
        const existingUsername = await User.findOne({username});

        if(!name || !username || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }
        if(existingEmail){
            return res.status(400).json({message: "Email already exists"});
        }

        if(existingUsername){
            return res.status(400).json({message: "Username already exists"});
        }
        if (password.length < 6) {
            return res.status(400).json({message: "Password should be at least 6 characters long"});
        }
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            username,
            email,
            password: hashedPassword
        });
        await user.save();

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"});
        res.cookie("jwt-talentnest", token,
            {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000,
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
            });
        res.status(201).json({message: "User registered successfully"});
    }
    catch(err){
        console.log("Error in signup", err.message)
        res.status(500).json({message: "Something went wrong XD"});
    }
}

export const login =  (req, res) => {
    res.send("Login!");
}

export const logout =  (req, res) => {
    res.send("Logout!");
}