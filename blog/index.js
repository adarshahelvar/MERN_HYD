import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import blogRoute from "./routes/blogRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection established...!");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({
  origin: function (origin, callback){
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true,
}))

app.use(express.json());
app.use("/auth", authRoute);
app.use("/blog", blogRoute);

connectDB().then(() => {
  app.listen(port), console.log(`app is listening on port ${port}`);
});
