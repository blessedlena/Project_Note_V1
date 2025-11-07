import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";


dotenv.config(); // Load environment variables from .env file
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors(
    {origin: "http://localhost:5173",}   // Allow requests from this origin (frontend server)}
)); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies, this will allow us to get access to req.body
app.use(rateLimiter);

// Prefixing /api/notes
app.use("/api/notes", notesRoutes); // 

connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
    });
});

