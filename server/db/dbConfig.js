const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
  user: DB_USERNAME,
  database: DATABASE_NAME,
  host: "localhost",
  password: DB_PASSWORD,
  connectionLimit: 10,
});
// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise()
