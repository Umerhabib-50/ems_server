const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/signin", employeeController.signIn);
router.post("/apply/loan", employeeController.applyLoan);
router.post("/apply/leave", employeeController.applyLeave);
router.post("/loanhistory", employeeController.loanhistory);
router.post("/leavehistory", employeeController.leavehistory);

module.exports = router;
