const { pool } = require('../lib/connection');

class Employee {
  constructor(id, firstName, lastName, roleId, managerId) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }

  static async findAll() {
    try {
        const [rows] = await pool.query(`
        SELECT
          employee.id,
          employee.first_name,
          employee.last_name,
          role.title AS role,
          department.name AS department,
          role.salary,
          CONCAT(manager.first_name, ' ', manager.last_name) AS manager
        FROM
          employee
          LEFT JOIN role ON employee.role_id = role.id
          LEFT JOIN department ON role.department_id = department.id
          LEFT JOIN employee AS manager ON employee.manager_id = manager.id
      `);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Employee;