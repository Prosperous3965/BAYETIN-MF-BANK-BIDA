const express = require("express");
const router = express.Router();

// Sample login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // In real app: check DB for credentials
  if (username === "admin" && password === "password") {
    res.json({ success: true, message: "✅ Login successful" });
  } else {
    res.status(401).json({ success: false, message: "❌ Invalid credentials" });
  }
});

// Test route
router.get("/", (req, res) => {
  res.send("🔑 Auth route is working!");
});

module.exports = router;
