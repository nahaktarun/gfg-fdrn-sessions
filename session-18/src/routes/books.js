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
/**
 * @swagger
 * components:
 *  schemas:
 *    Book:
 *      type: object
 *      required:
 *        - name
 *        - author
 *      properties:
 *         id:
 *            type: integer
 *            description: book id
 *         name:
 *            type: string
 *            description: name of the book
 *         author:
 *            type: string
 *            description: author of the book
 */

/**
 * @swagger
 * /api/books:
 *    get:
 *       summary: returns all the books
 *       tags: [Books]
 *       responses:
 *          200:
 *            description: The list of books
 *            content:
 *                application/json:
 *                    schema:
 *                      type: array
 *                      items:
 *                         $ref: '#/components/schemas/Book'
 *
 */
bookRouter.get("/", getAllBooksC);

/**
 * @swagger
 * /api/books/{id}:
 *    get:
 *       summary: returns a specific book
 *       tags: [Books]
 *       parameters:
 *          - in: path
 *            name: id
 *            schema:
 *               type: integer
 *            required: true
 *            description: the book id
 *       responses:
 *          200:
 *            description: The list of books
 *            content:
 *                application/json:
 *                    schema:
 *                      type: array
 *                      items:
 *                         $ref: '#/components/schemas/Book'
 *          404:
 *              description: the book was not found
 *
 */
bookRouter.get("/:bookId", getABookByIdC);

// Create book -> we need to get the information from the user -> through request body -> POST request
bookRouter.post("/", validateBook, createBook);

// Update -> PUT , id which you want to update along with the data you want to update.
bookRouter.put("/:bookId", validateBook, updateBook);

// delete a book -> DELETE, id which we want to delete
bookRouter.delete("/:bookId", deleteBook);

export default bookRouter;
