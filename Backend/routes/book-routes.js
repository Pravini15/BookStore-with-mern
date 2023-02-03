const express = require("express");
const Book = require("../model/Book");
const router = express.Router();
const Product = require("../model/Book");
const booksController = require("../controllers/books-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:bookId", booksController.getById);
router.put("/:bookId", booksController.updateBook);
router.delete("/:bookId", booksController.deleteBook);

module.exports = router;

 