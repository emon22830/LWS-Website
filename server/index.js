// const express = require("express")
import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/db.js"
import userRoute from "./routes/user.route.js"
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000


//default middleware
app.use(express.json())


//apis
app.use("/api/v1/user",userRoute)

//http://localhost:5000/api/v1/user/register

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server listen at port ${PORT} `)
})

//mdemon22830
//22830mdemon
//mongodb+srv://<db_username>:<db_password>@cluster0.tazn4hv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0