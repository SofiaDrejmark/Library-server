const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db.sqlite", (error) => {
  if (error) {
    console.error(error.messsage);
    throw error;
  }

  const bookStatement = `
    CREATE TABLE books (
        id INTERGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT, 
        author TEXT, 
        genre TEXT
    )`;

  db.run(bookStatement, (error) => {});
  console.log("Ansluten till databasen");
});

module.exports = db;
