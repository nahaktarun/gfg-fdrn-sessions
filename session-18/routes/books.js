import express from "express";
import { getAllBooksC } from "../controllers/bookController.js";
const bookRouter = express.Router();

bookRouter.get("/", getAllBooksC);

export default bookRouter;
