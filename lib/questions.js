const inquirer = require('inquirer');
const { connectDB } = require('./index');

const departments = [];
const roles = [];
const employees = [];

function questions() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'dbOptions',
            message: 'Which action would you like to perform?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role'
            ]
        },
    ])
    .then(({ dbOptions }) => {
        switch(dbOptions) {
            case 'Add a department':
                return this.department();
            case 'Add a role': 
                return this.role();
            case 'Add an employee':
                return this.employee();
            case 'Update an employee role':
                return this.updateDb();
            default: 
                return this.viewDb();
        }
    })
    .then(() => {
        return connectDB(departments, roles, employees);
    })
    .catch((err) => {
        console.log(err);
        console.log('Oops, something has gone terribly wrong!');
    });
}

function viewDb() {

};

// function updateEmployeeRole() {
//     {} = 
//     const queryRoles = '';

//     return inquirer 
//     .prompt([
//         {
//             type: 'list',
//             name: 'employeeName',
//             message: 'Choose an employee to update their role:',
//             choices: [queryEmployees]
//         },
//         {
//             type: 'list',
//             name: 'employeeRole',
//             message: "Choose your employee's new role:",
//             choices: [queryRoles]
//         }
//     ])
//     .then(({ employeeName, employeeRole }) => {
        
//     })
// };

function queryEmployeesAndRoles() {
    const employeesQuery = 'SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee';
    const rolesQuery = 'SELECT id, title FROM role';

    Promise.all([
        db.promise().query(employeesQuery),
        db.promise().query(rolesQuery)
    ])
    .then(([employeesResult, rolesResult]) => {
        const employees = employeesResult[0];
        const roles = rolesResult[0];

        return {
            employees,
            roles
        };
    })
}

async function updateEmployeeRole() {
    const { employees, roles } = await queryEmployeesAndRoles();

    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeeId',
                message: 'Select an employee to update:',
                choices: employees.map((employee) => ({
                    name: employee.name,
                    value: employee.id,
            })),
            },
            {
                type: 'list',
                name: 'roleId',
                message: 'Select the new role:',
                choices: roles.map((role) => ({
                    name: role.title,
                    value: role.id,
                })),
            },
        ])
        .then(({ employeeId, roleId }) => {
            const updateQuery = 
        })
};




function department() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'Department name:'
            },
            {
                type: 'confirm',
                name: 'anotherDepartment',
                message: 'Would you like to add another department?'
            }
        ])
        .then(({ departmentName, anotherDepartment }) => {
            departments.push(departmentName);
            if (anotherDepartment) {
                return this.department();
            }
        });
}


function role() {
    // TODO: add queries here. might need to make into its own function
    const queryDepartments = '';

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'Name of the role:'
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: 'Salary for the role:'
            },
            {
                type: 'list',
                name: 'roleDepartment',
                message: 'Which department?',
                choices: [queryDepartments, 'Add a new department']
            },
            {
                type: 'confirm',
                name: 'anotherRole',
                message: 'Would you like to add another role?'
            }
        ])
        .then(({ roleName, roleSalary, roleDepartment, anotherRole }) => {
            roles.push({ roleName, roleSalary, roleDepartment });
            if (roleDepartment === 'Add a new department') {
                return this.department();
            } else {
                roles.push(roleDepartment);
            }

            if (anotherRole) {
                return this.role();
            }
        });
}



function employee() {
    // TODO: add queries here. might need to make into its own function
    const queryRoles = '';

    // TODO: add queries here. might need to make into its own function
    const queryEmployees = '';

    return inquirer 
        .prompt([
            {
                type: 'input',
                name: 'employeeFirstName',
                message: "Employee's first name:"
            },
            {
                type: 'input',
                name: 'employeeLastName',
                message: "Employee's last name:"
            },
            {
                type: 'choice',
                name: 'employeeRole',
                message: 'Which role for the employee?',
                choices: [queryRoles, 'Add a new role']
            },
            {
                type: 'choice',
                name: 'employeeManager',
                message: "Who is the employee's manager?",
                choices: [queryEmployees, 'No manager']
            },
            {
                type: 'confirm',
                name: 'anotherEmployee',
                message: 'Would you like to add another employee?'
            }
        ])
        .then(({ 
            employeeFirstName, 
            employeeLastName, 
            employeeRole, 
            employeeManager, 
            anotherEmployee }) => {
                employees.push(employeeFirstName, employeeLastName);
                if (employeeRole === 'Add a new role') {
                    return this.role();
                } else {
                    employees.push(employeeRole);
                }

                if (employeeManager === 'No manager') {
                    employees.push(null);
                } else {
                    employees.push(employeeManager);
                }

                if (anotherEmployee) {
                    return this.employee();
                }
            });
}



// TODO: something like the following
// function init() {
//     questions()
//         .then((answers) => writeFile('../README.md', createMd.generateMarkdown(answers)))
//         .then(() => console.log('Answers successfully written to README file'))
//         .catch((err) => console.error(err));
// };

// init();
