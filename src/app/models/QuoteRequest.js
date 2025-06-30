// models/QuoteRequest.js
import mongoose from "mongoose";

const QuoteRequestSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    address: String,
    projectType: String,
    propertyType: String,
    area: String,
    timeline: String,
    budget: String,
    services: [String],
    description: String,
    urgency: String,
    preferredContact: String,
    visitRequired: Boolean,
  },
  { timestamps: true }
);

// Prevent model overwrite in development
export default mongoose.models.QuoteRequest ||
  mongoose.model("QuoteRequest", QuoteRequestSchema);
