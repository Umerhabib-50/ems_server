const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/signin", employeeController.signIn);
router.post("/apply/loan", employeeController.applyLoan);

module.exports = router;
