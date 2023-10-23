const Employee = require("../models/Employee");

// Function to create a new employee
const createEmployee = async (employeeData) => {
  try {
    const newEmployee = new Employee(employeeData);
    return await newEmployee.save();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createEmployee,
};
