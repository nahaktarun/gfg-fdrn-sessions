import Book from "../models/Book.js";

export const getAllBooks = async () => {
  const books = await Book.find({});
  return books;
};

export const getBookById = async (bookId) => {
  const book = await Book.findById(bookId);
  return book;
};
// console.log('1' === 1)  FALSE
export const createBookSVC = async (bookData) => {
  const book = new Book(bookData);
  const saved = await book.save();
  if (saved) {
    return book;
  }
};

export const updateBookSVC = async (bookId, book) => {
  return await Book.findByIdAndUpdate(bookId, book, {
    new: true,
    runValidators: true,
  });
};

export const deleteSVC = async (bookId) => {
  return await Book.findByIdAndDelete(bookId);
};

// MERN -> Mongodb , Express, React, node.