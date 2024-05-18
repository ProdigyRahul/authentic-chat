import mongoose from "mongoose";
import * as dotenv from "dotenv";

// Dotenv configuration
dotenv.config();

const connect = (callback) => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
      callback(null);
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      callback(err);
    });
};

export default { connect };
