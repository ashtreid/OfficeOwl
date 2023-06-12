const { table } = require('table');
const Department = require('../models/Department');
const Role = require('../models/Role');
const Employee = require('../models/Employee');

async function displayDepartments() {
    try {
        const departments = await Department.findAll();
        const data = [['ID', 'Department Name']];
        departments.forEach((department) => {
            data.push([department.id, department.name]);
        });
        const output = table(data);
        console.log(output);
    } catch (err) {
        console.error(err);
    }
};

async function displayRoles() {
    try {
        const roles = await Role.findAll();
        const data = [['ID', 'Title', 'Salary', 'Department ID']];
        roles.forEach((role) => {
            data.push([role.id, role.title, role.salary, role.department_id]);
        });
        const output = table(data);
        console.log(output);
    } catch (err) {
        console.error(err);
    }
};

async function displayEmployees() {
    try {
        const employees = await Employee.findAll();
        const data = [['ID', 'First Name', 'Last Name', 'Role ID', 'Manager ID']];
        employees.forEach((employee) => {
            data.push([employee.id, employee.firstName, employee.lastName, employee.roleId, employee.managerId]);
        })
        const output = table(data);
        console.log(output);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    displayDepartments,
    displayRoles,
    displayEmployees
};
