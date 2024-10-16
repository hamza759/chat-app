import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("sucessfully connected  MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectMongodb;
