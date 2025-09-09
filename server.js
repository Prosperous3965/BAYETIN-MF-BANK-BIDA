const express = require("express");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 MFB Digital Banking API is running");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/transactions", require("./routes/transactions"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
