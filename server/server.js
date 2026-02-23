import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize express 
const app = express();

// connect to db 
await connectDB();

//Middlewares
app.use(cors());
app.use(express.json())

//Routes
app.get("/", (req, res)=>res.send("Api working"));
app.post("/clerk", clerkWebhooks);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log("Server is running on http://localhost:"+PORT));