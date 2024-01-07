const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.post("/signin", employeeController.signIn);
router.post("/apply/loan", employeeController.applyLoan);
router.post("/apply/leave", employeeController.applyLeave);
router.post("/apply/asset", employeeController.applyasset);
router.post("/loanhistory", employeeController.loanhistory);
router.post("/leavehistory", employeeController.leavehistory);
router.post("/assethistory", employeeController.assethistory);
router.patch("/changepassword", employeeController.changePassword);

module.exports = router;
