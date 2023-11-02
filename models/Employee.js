const mongoose = require("mongoose");

// Define the employee schema
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  position: String,
  department: String,
  salary: String,
  password: String,
  date: String,

  //   hireDate: {
  //     type: Date,
  //     default: Date.now, // Set the default hire date to the current date
  //   },
});

// Create the Employee model
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
