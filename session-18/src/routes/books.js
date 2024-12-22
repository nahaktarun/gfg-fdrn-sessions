import express from "express";
import {
  getAllBooksC,
  getABookByIdC,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
import { validateBook } from "../middlewares/validation.js";
const bookRouter = express.Router();
// CRUD -> Create Read Update Delete
bookRouter.get("/", getAllBooksC);
bookRouter.get("/:bookId", getABookByIdC);

// Create book -> we need to get the information from the user -> through request body -> POST request
bookRouter.post("/", validateBook, createBook);

// Update -> PUT , id which you want to update along with the data you want to update.
bookRouter.put("/:bookId", validateBook, updateBook);

// delete a book -> DELETE, id which we want to delete
bookRouter.delete("/:bookId", deleteBook);

export default bookRouter;
