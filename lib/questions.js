// require('dotenv').config();

// const mysql = require('mysql2/promise');
// const inquirer = require('inquirer');


// const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME
// });

// const connect = async () => {
//     try {
//         const connection = await db;
//         console.log(`Connected to the ${connection.config.database} database.`);
//         return connection;
//     } catch (err) {
//         console.error('Error connecting to the database:', err);
//         throw err;
//     }
// };

// const departments = [];
// const roles = [];
// const employees = [];

// function questions() {
//     return inquirer.prompt([
//         {
//             type: 'list',
//             name: 'dbOptions',
//             message: 'Which action would you like to perform?',
//             choices: [
//                 'View all departments',
//                 'View all roles',
//                 'View all employees',
//                 'Add a department',
//                 'Add a role',
//                 'Add an employee',
//                 'Update an employee role'
//             ]
//         },
//     ])
//         .then(({ dbOptions }) => { return view(); })
//         .catch((err) => {
//             console.log(err);
//             console.log('Oops, something has gone terribly wrong!');
//         });
// }

// const view = async () => {
//     try {
//         const departmentView = 'SELECT * FROM department';
//         db.query(departmentView, (err, rows) => {
//             if (err) {
//               console.error('Error reading department', err.message);
//               return;
//             }
        
//             console.log('Departments:');
//             rows.forEach((row) => {
//               console.log(`ID: ${row.id}, Name: ${row.name}`);
//             });
//         });

//     } catch (err) {
//         console.error('Error viewing the database:', err);
//     }
// };

// module.exports = {
//     questions
// };


// // //TODO: try this out first then add more
// // const mysql = require('mysql2/promise');
// // // const Connection = require('mysql2/typings/mysql/lib/Connection');
// // const inquirer = require('inquirer');

// // const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// // const db = mysql.createConnection({
// //   host: 'localhost',
// //   user: DB_USER,
// //   password: DB_PASSWORD,
// //   database: DB_NAME
// // });

// // const connect = async () => {
// //     try {
// //         const connection = await mysql.createConnection(db);
// //         console.log(`Connected to the ${connection.config.database} database.`);
// //         return connection;
// //     } catch (err) {
// //         console.error('Error connecting to the database:', err);
// //         throw err;
// //     }
// // };

// // const departments = [];
// // const roles = [];
// // const employees = [];

// // function questions() {
// //     return inquirer.prompt([
// //         {
// //             type: 'list',
// //             name: 'dbOptions',
// //             message: 'Which action would you like to perform?',
// //             choices: [
// //                 'View all departments',
// //                 'View all roles',
// //                 'View all employees',
// //                 'Add a department',
// //                 'Add a role',
// //                 'Add an employee',
// //                 'Update an employee role'
// //             ]
// //         },
// //     ])
// //         .then(({ dbOptions }) => { return this.department(); })
// //         .then(() => {
// //             return view();
// //         })
// //         .catch((err) => {
// //             console.log(err);
// //             console.log('Oops, something has gone terribly wrong!');
// //         });
// // };

// // const view = async () => {
// //     try{
// //         const departmentView = 'SELECT * from department'
// //         this.db.query(departmentView, (err, rows) => {
// //             if (err) {
// //               console.error('Error reading department', err.message);
// //               return;
// //             }
        
// //             console.log(tableName);
// //             rows.forEach((row) => {
// //               // TODO: this needs to be dynamic for other tables
// //               console.log(`ID: ${row.id}, Name: ${row.name}`);
// //             });
// //           });

// //     } catch (err) {
// //         console.error('Error viewing the database:', err);
// //     }
// // };



// // module.exports = {
// //     questions
// // };

// // function init() {
// //     questions()
// //         // .then((answers) => writeFile('../README.md', createMd.generateMarkdown(answers)))
// //         // .then(() => console.log('Answers successfully written to README file'))
// //         // .catch((err) => console.error(err));
// // };

// // init();


// // function addDepartment() {
// //     return inquirer
// //         .prompt([
// //             {
// //                 type: 'input',
// //                 name: 'departmentName',
// //                 message: 'Department name:'
// //             },
// //             {
// //                 type: 'confirm',
// //                 name: 'anotherDepartment',
// //                 message: 'Would you like to add another department?'
// //             }
// //         ])
// //         .then(({ departmentName, anotherDepartment }) => {
// //             departments.push(departmentName);
// //             if (anotherDepartment) {
// //                 return this.department();
// //             }
// //         });
// // }



// // function employee() {
// //     // TODO: add queries here. might need to make into its own function
// //     const queryRoles = '';

// //     // TODO: add queries here. might need to make into its own function
// //     const queryEmployees = '';

// //     return inquirer 
// //         .prompt([
// //             {
// //                 type: 'input',
// //                 name: 'employeeFirstName',
// //                 message: "Employee's first name:"
// //             },
// //             {
// //                 type: 'input',
// //                 name: 'employeeLastName',
// //                 message: "Employee's last name:"
// //             },
// //             {
// //                 type: 'choice',
// //                 name: 'employeeRole',
// //                 message: 'Which role for the employee?',
// //                 choices: [queryRoles, 'Add a new role']
// //             },
// //             {
// //                 type: 'choice',
// //                 name: 'employeeManager',
// //                 message: "Who is the employee's manager?",
// //                 choices: [queryEmployees, 'No manager']
// //             },
// //             {
// //                 type: 'confirm',
// //                 name: 'anotherEmployee',
// //                 message: 'Would you like to add another employee?'
// //             }
// //         ])
// //         .then(({ 
// //             employeeFirstName, 
// //             employeeLastName, 
// //             employeeRole, 
// //             employeeManager, 
// //             anotherEmployee }) => {
// //                 employees.push(employeeFirstName, employeeLastName);
// //                 if (employeeRole === 'Add a new role') {
// //                     return this.role();
// //                 } else {
// //                     employees.push(employeeRole);
// //                 }

// //                 if (employeeManager === 'No manager') {
// //                     employees.push(null);
// //                 } else {
// //                     employees.push(employeeManager);
// //                 }

// //                 if (anotherEmployee) {
// //                     return this.employee();
// //                 }
// //             });
// // }

