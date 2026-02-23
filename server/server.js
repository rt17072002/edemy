import "dotenv/config"
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

//Initialize express
const app = express();

//connect to database
await connectDB();

// Middlewares 
app.use(cors())

//Routes
app.get("/", (req, res)=>res.send("Api working"));
app.post("/clerk" , express.json(), clerkWebhooks);

//port
const PORT = process.env.PORT || 5000;

//Starting the server
app.listen(PORT, ()=>console.log(`Server is running on http://localhost:${PORT}`));