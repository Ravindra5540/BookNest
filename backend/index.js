const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

/* ======================
   Middleware
====================== */
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:3000",   // React (CRA)
    "http://localhost:5173",   // Vite
    "https://book-app-frontend-tau.vercel.app",
    "https://book-nest-neon-six.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

/* ======================
   Routes
====================== */
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

/* ======================
   Default Route
====================== */
app.get("/", (req, res) => {
  res.send("Book Store Server is running!");
});

/* ======================
   MongoDB Connection
====================== */
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

connectDB();

/* ======================
   Server Start
====================== */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
