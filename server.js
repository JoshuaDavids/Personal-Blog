const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// Express setup
const app = express();
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to Joshuas Blog" }));

// Define Routes
app.use("/posts", require("./routes/postRoute"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
