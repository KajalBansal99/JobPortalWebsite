import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
// ... other imports ...

dotenv.config({});
const app = express();

// ======== 1. Middleware Setup ========
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ======== 2. CORS Configuration ======== 👈 (Add it HERE)
const allowedOrigins = ['http://localhost:5173',];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Optional: Explicitly allow methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Optional: Explicitly allow headers
};
app.use(cors(corsOptions));

// ======== 3. Routes ========
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
// ... other routes ...

// ======== 4. Server Start ========
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});