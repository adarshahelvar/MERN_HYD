import express from  "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connection established...!")
    } catch (error) {
        console.log(error)
    }
}

connectDB().then(()=>{
    app.listen(port),
    console.log(`app is listening on port ${port}`)
})