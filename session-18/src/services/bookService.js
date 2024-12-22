let books = [
  {
    id: 1,
    name: "Alice",
    author: "Alice",
  },
  {
    id: 2,
    name: "Bob",
    author: "Bob",
  },
];

export const getAllBooks = () => books;

export const getBookById = (bookId) => {
  const allBooks = getAllBooks();
  const book = allBooks.find((book) => book.id === parseInt(bookId));
  return book;
};
// console.log('1' === 1)  FALSE
export const createBookSVC = (book) => {
  const newBook = {
    id: books.length + 1,
    ...book,
  };
  books.push(newBook);
  return newBook;
};

export const updateBookSVC = (bookId, book) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(bookId));
  if (bookIndex === -1) return null;

  books[bookIndex] = {
    id: parseInt(bookId),
    ...book,
  };
  console.log("Inside service");
  console.log(books[bookIndex]);
  return books[bookIndex];
};

export const deleteSVC = (bookId) => {
  const noOfBooks = books.length;
  books = books.filter((book) => book.id !== parseInt(bookId));
  return noOfBooks > books.length;
};
