import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) => {
    const {username, email, password} = req.body;

    const hashedPassword = await bcryptjs.hash(password,10);
    
    try{
        const newUser = await User.create({username,email,password:hashedPassword});
        res.status(201).json({
                message: 'User Created Successfully',
        })
    }catch(err) {
        next(err);
    }
    
}