// Import Libraries
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import db from "./config/db.js";

// Dotenv configuration
dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Initialize Express App
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => {
  res.send("Backend is Running!!");
});

// Database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // Exit process with failure
  } else {
    console.log("Database connected successfully");

    // Start the server only if the database connection is successful
    const server = app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
    });
  }
});
