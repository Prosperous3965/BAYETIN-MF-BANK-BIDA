const express = require("express");
const router = express.Router();

// Sample transaction list
router.get("/", (req, res) => {
  res.json([
    { id: 1, type: "deposit", amount: 500 },
    { id: 2, type: "withdrawal", amount: 200 },
  ]);
});

// Sample transfer
router.post("/transfer", (req, res) => {
  const { from, to, amount } = req.body;
  // In real app: deduct from sender, credit receiver
  res.json({
    success: true,
    message: `💸 Transferred ${amount} from ${from} to ${to}`,
  });
});

module.exports = router;
