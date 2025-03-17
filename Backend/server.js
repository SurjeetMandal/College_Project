import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminroutes.js";

// app config
const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

//api endpoint
app.use("/api/admin", adminRouter);
//localhost:4000/api/admin

app.get("/", (req, res) => {
  res.send("API is  WORKING");
});

app.listen(port, () => console.log("Server started", port));
