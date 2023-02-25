require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
// Error Handling middlewares

// routes
app.use("/api/users", require("./routes/user"));

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: http://localhost:${PORT}`);
});
