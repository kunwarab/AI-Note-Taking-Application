import bcrypt from "bcryptjs";
import User from "../models/usersSchema.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req,res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if(existingUser){
            return  res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password,
        });
        
        const token = generateToken(user._id);
        
        res.status(201).json({
            message: "User registered successfully",
            token,
        });
    }
    catch(error){
            res.status(500).json({ message: error.message });
    }
}

export const login = async (req,res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user){
            res.status(400).json({ message: "Invalid email or password!"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: ""})
        }

        const token = generateToken(user._id);

        res.status(200).json({
            message: "Login successful",
            token,
        });
        
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
