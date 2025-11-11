// Importing Dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const xssClean = require("xss-clean");
const mongoSanitize = require("express-mongo-sanitize");
const connectDB = require("./connectDB");
const ApplicationRoutes = require("./Routes/ApplicationRoutes");
require("dotenv").config();

// Validate Environment Variables
if (!process.env.PORT || !process.env.MONGO_URI) {
  console.error("❌ Missing required environment variables. Check .env file.");
  process.exit(1);
}

// Initialize Express App
const app = express();

// Enable Security Headers
app.use(helmet());

// CORS Configuration - Restrict Allowed Origins
const corsOptions = {
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,
};
app.use(cors(corsOptions));

// Prevent XSS Attacks (Sanitize Input)
app.use(xssClean());

// Prevent NoSQL Injection & Sanitize Data
app.use(mongoSanitize());

// Prevent HTTP Parameter Pollution
app.use(hpp());

// Rate Limiting (DDoS Protection)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "⚠️ Too many requests, please try again later.",
});
app.use(limiter);

// JSON Payload Protection (Limit Upload Size & Prevent Parsing Attacks)
app.use(express.json({ limit: "5mb", strict: true }));

// Connect to Database
connectDB();

// Secure Routes
app.use("/api", ApplicationRoutes);
app.use('/api/game', gameRoutes);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Secure Server is running on port: ${PORT}`);
});
