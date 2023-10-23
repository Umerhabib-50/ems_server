const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/createEmployee", adminController.createEmployee);

module.exports = router;
