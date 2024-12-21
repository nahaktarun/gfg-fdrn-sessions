import { getAllBooks } from "../services/bookService.js";
export const getAllBooksC = (req, res) => {
  const books = getAllBooks();
  res.json(books);
};
