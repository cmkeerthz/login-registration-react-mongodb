import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./models/routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/experiment8")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.get("/", (req, res) => {
  res.send("Experiment 8 Login and Registration API is running!");
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
