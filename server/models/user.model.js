import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        require:true,
    },
    description:{
        type:String,
        
    },
    role:{
        type:String,
        enum:["instructor", 'student']
    },
    photoUrl:{
            type:String,
            default: " "
    },
    enrolledCourse:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    ]

},{timestamps:true})


export const User = mongoose.model('User', userSchema);