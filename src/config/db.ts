import mongoose from "mongoose";
require("dotenv").config();
console.log("MONGO_URL:", process.env.MONGODB_URI);
export const connectDB = async () => {
  try {
    
    const mongoUri = process.env.MONGODB_URI;
    console.log(mongoUri)
    if (!mongoUri) {
      throw new Error("MONGODB_URI not defined in environment variables");
    }
    await mongoose.connect(mongoUri || '');
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
