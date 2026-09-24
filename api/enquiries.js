import mongoose from "mongoose";
import Enquiry from "../backend/models/Enquiry.js";

let connectionPromise;

async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) return;

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not configured.");
  }

  connectionPromise ??= mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  });

  try {
    await connectionPromise;
  } catch (error) {
    connectionPromise = undefined;
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed." });
  }

  const { name, phone, email, interest, message } = req.body || {};

  if (!name?.trim() || !phone?.trim() || !interest?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Name, phone number, and interest are required.",
    });
  }

  try {
    await connectToDatabase();

    await Enquiry.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim(),
      interest: interest.trim(),
      message: message?.trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully!",
    });
  } catch (error) {
    console.error("Error saving enquiry:", error);
    return res.status(503).json({
      success: false,
      message: "Unable to submit the enquiry right now. Please try again later.",
    });
  }
}
