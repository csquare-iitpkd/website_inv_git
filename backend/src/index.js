// src/index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import projectRoute from './routes/projectsRoute.js';
import { requireAuth } from "./middleware/authMiddleware.js";

dotenv.config();
const app = express();
app.use(cors({
  origin: "*", 
  credentials: true
}));
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

// Auth
app.use("/auth", authRoute);
app.use('/projects', projectRoute);

app.get("/hello", (req, res) => {
  res.send("Hello from Innovation Lab Backend!");
});

app.get("/me", requireAuth, async (req, res) => {
  res.json({ user: req.user });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
