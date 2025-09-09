const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
const transactionRoutes = require("./routes/transactions");

// Test homepage
app.get("/", (req, res) => {
  res.send("🚀 BAYETIN MF BANK BIDA is live on Railway!");
});

// Use routes
app.use("/auth", authRoutes);
app.use("/transactions", transactionRoutes);

// Port for Railway or local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
