import {
  getAllBooks,
  getBookById,
  createBookSVC,
  updateBookSVC,
  deleteSVC,
} from "../services/bookService.js";
export const getAllBooksC = async(req, res) => {
  const books = await getAllBooks();
  res.json(books);
};

export const getABookByIdC = async(req, res) => {
  const book = await getBookById(req.params.bookId);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  return res.json(book);
};

export const createBook = async(req, res) => {
  const newBook = await createBookSVC(req.body);
  res.status(201).json(newBook); // chaining of methods
};

export const updateBook = async (req, res) => {
  const updatedBook = await updateBookSVC(req.params.bookId, req.body);
  console.log("inside controller");
  if (!updatedBook) {
    return res.status(404).json({ error: "book not found" });
  }
  return res.status(200).json(updatedBook);
};

export const deleteBook = async(req, res) => {
  const deleted = await deleteSVC(req.params.bookId);
  if (!deleted) {
    return res.status(404).json({ error: "book not found" });
  }
  res.status(204).send();
};
