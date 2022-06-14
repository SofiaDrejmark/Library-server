const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();

//Middlewares
app.use(express.json());

//Routes
const booksRouter = require("./routers/books.router");

app.use(booksRouter);

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`);
});
