const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { authenticateToken } = require("../middlewares/authentication");

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

router.get("/employees/loans", adminController.getAllloans);
router.get("/employees/leaves", adminController.getAllLeaves);
router.patch(
  "/employees/loans/approve-reject",
  adminController.Approve_Reject_loan
);

router.patch(
  "/employees/leaves/approve-reject",
  adminController.Approve_Reject_leave
);

module.exports = router;
