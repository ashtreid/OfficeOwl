const { pool } = require('../lib/connection');

class Role {
    constructor(id, title, salary, departmentId) {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }

    static async findAll() {
        try {
            const [rows] = await pool.query('SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id');
            return rows;
        } catch (err) {
            throw err;
        }
    }

}

module.exports = Role;