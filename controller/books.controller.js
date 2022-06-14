const res = require("express/lib/response");
const model = require("../models/books.model");

// Get all books
async function getBooks(req, res) {
  const result = await model.getBooks();
  res.json(result);
}

// Post book
async function addBook(req, res) {
  const { title, author, genre } = req.body;
  const newBook = {
    title,
    author,
    genre,
  };
  const result = await model.addBook(newBook);
  res.json(result);
}

// Get one book
async function getBook(req, res) {
  const book = req.params.id;
  const result = await model.getBook(book);
  res.json(result);
}

// Remove one book
async function removeBook(req, res) {
  const book = req.params.id;
  const result = await model.removeBook(book);
  res.json(result);
}
// Put book
async function putBook(req, res) {
  const { title, author, genre } = req.body;
  const book = req.params.id;
  const result = {
    title,
    author,
    genre,
  };
  await model.putBook(book, result);
  res.json(result);
}

// Patch book
async function patchBook(req, res) {
  const { title } = req.body;
  const book = req.params.id;
  const result = await model.patchBook(book, title);
  res.json(result);
}

module.exports = {
  getBooks,
  getBook,
  addBook,
  putBook,
  patchBook,
  removeBook,
};
