const { pool } = require('../lib/connection');

class Department {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static async findAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM department');
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Department;