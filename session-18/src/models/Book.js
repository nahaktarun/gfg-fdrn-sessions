import mongoose from "mongoose";

// 1. define the schema
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name of book is required"],
  },
  author: {
    type: String,
    required: [true, "Name of author is required"],
  },
});

// 2.create a model based on the schema
const Book = mongoose.model("Book", bookSchema);
export default Book;
