import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

 dotenv.config(); // Load environment variables from .env file
 console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(express.json()); // Middleware to parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies   
app.use((req, res, next) => {
    console.log(`req method is ${req.method} and url is ${req.url}`);
    next();
})
app.use("/api/notes", notesRoutes); // Prefixing /api/notes
//app.use("/api/product", productRoutes);
//app.use("/api/posts", productRoutes);
//app.use("/api/payments", productRoutes);
//app.use("/api/emails", productRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
});

