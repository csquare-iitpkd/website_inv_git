// src/routes/authRoutes.js
import express from "express";
import { verifyGoogleIdToken, upsertUserFromGoogle, createSessionToken } from "../auth.js";

const router = express.Router();


router.post("/google", async (req, res) => {
  try {
    const { id_token } = req.body;
    if (!id_token) return res.status(400).json({ error: "id_token required" });

    const payload = await verifyGoogleIdToken(id_token);

    const user = await upsertUserFromGoogle(payload);

    const token = createSessionToken(user);


    return res.json({ token, user });
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(500).json({ error: "Authentication failed" });
  }
});

export default router;
