const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Enquiry = require("./models/Enquiry");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Prime Wealth Backend is running!");
});

// Submit enquiry
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, phone, email, interest, message } = req.body;

    const enquiry = new Enquiry({
      name,
      phone,
      email,
      interest,
      message,
    });

    await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
    });
  } catch (error) {
    console.error("Error saving enquiry:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry.",
    });
  }
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
