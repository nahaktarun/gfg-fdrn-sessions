import {
  getAllBooks,
  getBookById,
  createBookSVC,
  updateBookSVC,
  deleteSVC,
} from "../services/bookService.js";
export const getAllBooksC = (req, res) => {
  const books = getAllBooks();
  res.json(books);
};

export const getABookByIdC = (req, res) => {
  const book = getBookById(req.params.bookId);
  if (!book) {
    return res.json({ error: "Book not found" });
  }
  return res.json(book);
};

export const createBook = (req, res) => {
  const newBook = createBookSVC(req.body);
  res.status(201).json(newBook); // chaining of methods
};

export const updateBook = (req, res) => {
  const updatedBook = updateBookSVC(req.params.bookId, req.body);
  console.log("inside controller");
  if (!updatedBook) {
    return res.status(404).json({ error: "book not found" });
  }
  return res.status(200).json(updatedBook);
};

export const deleteBook = (req, res) => {
  const deleted = deleteSVC(req.params.bookId);
  if (!deleted) {
    return res.status(404).json({ error: "book not found" });
  }
  res.status(204).send();
};
