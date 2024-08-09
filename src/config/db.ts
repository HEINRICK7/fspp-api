import mongoose from "mongoose";
require("dotenv").config();

export const connectDB = async () => {
  try {
    
    const mongoUri = 'mongodb+srv://heinrickcostta:1OYvBVz3pzeMCejc@fspp.tk2tc.mongodb.net/fspp?retryWrites=true&w=majority';
    console.log(mongoUri)
    if (!mongoUri) {
      throw new Error("MONGODB_URI not defined in environment variables");
    }
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
