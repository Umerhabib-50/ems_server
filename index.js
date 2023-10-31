const express = require("express");
const connectDb = require("./config/db");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const adminRoutes = require("./routes/admin");
const employeeRoutes = require("./routes/employee");

const { sendErrorResponse } = require("./utils/responseUtils");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/employee", employeeRoutes);

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
