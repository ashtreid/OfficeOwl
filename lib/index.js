// const mysql = require('mysql2/promise');
// // const Connection = require('mysql2/typings/mysql/lib/Connection');

// const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME
// });

// const connect = async () => {
//     try {
//         const connection = await mysql.createConnection(db);
//         console.log(`Connected to the ${connection.config.database} database.`);
//         return connection;
//     } catch (err) {
//         console.error('Error connecting to the database:', err);
//         throw err;
//     }
// };

// const view = async () => {
//     try{
//         const departmentView = 'SELECT * from department'
//         this.db.query(departmentView, (err, rows) => {
//             if (err) {
//               console.error('Error reading department', err.message);
//               return;
//             }
        
//             console.log(tableName);
//             rows.forEach((row) => {
//               // TODO: this needs to be dynamic for other tables
//               console.log(`ID: ${row.id}, Name: ${row.name}`);
//             });
//           });

//     } catch (err) {
//         console.error('Error viewing the database:', err);
//     }
// };

// // function read(tableName, sql) {
// //     this.db.query(sql, (err, rows) => {
// //       if (err) {
// //         console.error(`Error reading ${tableName}:`, err.message);
// //         return;
// //       }
  
// //       console.log(tableName);
// //       rows.forEach((row) => {
// //         // TODO: this needs to be dynamic for other tables
// //         console.log(`ID: ${row.id}, Title: ${row.title}`);
// //       });
// //     });
// //   };

// module.exports = {
//     connect,
//     view
//   };