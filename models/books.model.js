const db = require("../config/db");
const res = require("express/lib/response");

// Get all books
function getBooks() {
  const sql = `SELECT * FROM books`;
  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(200);
      resolve(rows);
    });
  });
}

// Get one book
function getBook(id) {
  const sql = `SELECT * FROM books WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.get(sql, id, (error, rows) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      res.status(201);
      resolve(rows);
    });
  });
}
// Add books
function addBook(book) {
  const sql = `INSERT INTO books (title, author, genre) VALUES (?, ?, ?)`;

  return new Promise((resolve, reject) => {
    db.run(sql, [book.title, book.author, book.genre], (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      console.log("Book added");
      res.status(200);
      resolve(getBooks());
      
    });
  });
  
}

// Remove book
function removeBook(id) {
  const sql = `DELETE FROM books WHERE id = ?`;

  return new Promise((resolve, reject) => {
    db.get(sql, id, (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      console.log("Book removed");
      res.status(204);
      resolve(getBooks());
    });
  });
}

// Put book
function putBook(id, book) {
  const sql = `UPDATE books SET title = "${book.title}", author = "${book.author}", genre = "${book.genre}" WHERE id = ${id}`;

  return new Promise((resolve, reject) => {
    db.run(sql, (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      console.log("Book replaced");
      res.status(200);
      resolve(getBooks());
    });
  });
}
// Patch book
function patchBook(id, book) {
  const sql = `UPDATE books SET title = "${book}" WHERE id = ${id}`;

  return new Promise((resolve, reject) => {
    db.run(sql, [book.title], (error) => {
      if (error) {
        console.error(error.message);
        res.status(400);
        reject(error);
      }
      console.log("Changed title");
      res.status(200);
      resolve(getBooks());
    });
  });
}

module.exports = {
  getBooks,
  getBook,
  addBook,
  removeBook,
  putBook,
  patchBook,
};
