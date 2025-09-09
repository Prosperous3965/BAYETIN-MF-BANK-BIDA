const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ message: "Login successful", email });
});

module.exports = router;
