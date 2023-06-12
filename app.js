const inquirer = require('inquirer');
const { displayDepartments, displayRoles, displayEmployees } = require('./views/tables');

function questions() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees'
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          displayDepartments();
          break;
        case 'View all roles':
          displayRoles();
          break;
        case 'View all employees':
          displayEmployees();
          break;
        default:
          console.log('Invalid action');
          break;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

// Start the application
console.log('Employee Management System');
questions();
