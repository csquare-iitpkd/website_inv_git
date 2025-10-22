// src/routes/authRoutes.js
import express from "express";
import { verifyGoogleIdToken, upsertUserFromGoogle, createSessionToken } from "../auth.js";

const router = express.Router();


router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: "token required" });

    const payload = await verifyGoogleIdToken(token);

    const user = await upsertUserFromGoogle(payload);

    const _token = createSessionToken(user);


    return res.json({ _token, user });
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(500).json({ error: "Authentication failed" });
  }
});

export default router;
