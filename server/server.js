// CONFIG dotenv
require("dotenv").config();

// import package and file
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.APP_PORT;

// Import routes
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");

// connect DB
const { connectDb } = require("./configs/db");
connectDb();

// CORS
app.use(cors());
// body Parser
app.use(express.json());

// Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/post", postRoute);

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
