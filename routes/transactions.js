const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { amount, type } = req.body;
  res.json({ message: "Transaction recorded", amount, type });
});

module.exports = router;
