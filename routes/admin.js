const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authenticateToken = require("../middlewares/authentication");

router.post("/signin", adminController.signIn);
router.post("/signup", adminController.signUp);
router.post(
  "/createEmployee",
  authenticateToken,
  adminController.createEmployee
);

router.get(
  "/employees/all",
  authenticateToken,
  adminController.getAllEmployees
);

module.exports = router;
