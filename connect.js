const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(
  './dua_main.sqlite',
  sqlite3.OPEN_READONLY,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
  }
);

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});
