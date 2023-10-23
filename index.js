const express = require("express");
const connectDb = require("./config/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const adminRoutes = require("./routes/admin");
const { sendErrorResponse } = require("./utils/responseUtils");

app.use(express.json());

app.use("/api/v1/admin", adminRoutes);

// Middleware for Errors
app.use(sendErrorResponse);

const startServer = async () => {
  await connectDb();
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

// Start the server
startServer();
