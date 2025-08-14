
import {User} from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

//Register Section
export const register = async(req, res)=>{
    try{
        const {name, email, password,role}=req.body
        if(!name || !email || !password || !role){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "user already exists with this email"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            name,
            email,
            password:hashedPassword,
            role
        });
        return res.status(201).json({
            success:true,
            message: "Accounted Created Successfully"
        })

    }catch(error){

        console.log(error);
        return res.status(500).json({
            success:false,
            message: "Failed to register"
        })
    }
}



//Login Section
export const login = async(req,res)=>{
    try{
        const {email, password}=req.body
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message: "All field are required"
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message:" Incorrect Email or Password"
            })
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if(!isPassword){
            return res.status(400).json({
                success:false,
                message:"incorrect Email or Password"
            })
        }

        //generate
        const token = jwt.sign({userId:user._id}, process.env.SECRET_KEY, {expiresIn: "1d"})
        return res.cookie('token', token, {httpOnly:true, samSite: 'strict', maxAge: 1*24*60*1000}).json({
            message: `Welcome back ${user.name}`,
            success: true,
            user
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to Login"
        })
    }
}




//Logout Section

export const logout = async(_req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out Successfully",
            success: true
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to Logout"
        })
        
        
    }
}



