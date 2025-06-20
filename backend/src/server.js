import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

 dotenv.config(); // Load environment variables from .env file
 console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;



app.use(express.json()); // Middleware to parse JSON bodies, this will allow us to get access to req.body
 
// app.use((req, res, next) => {
//     console.log(`req method is ${req.method} and url is ${req.url}`);
//     next();
// })
app.use(rateLimiter);

app.use("/api/notes", notesRoutes); // Prefixing /api/notes
//app.use("/api/product", productRoutes);
//app.use("/api/posts", productRoutes);
//app.use("/api/payments", productRoutes);
//app.use("/api/emails", productRoutes);
connectDB().then(() => {
    app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
});
});

