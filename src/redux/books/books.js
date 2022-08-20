const ADDBOOK = 'bookstore/books/ADDBOOK';
const REMOVEBOOOK = 'bookstore/books/REMOVEBOOK';

const initState = [
  {
    title: 'Book',
    author: 'Author',
    id: 1,
  },
  {
    title: 'Book2',
    author: 'Author2',
    id: 2,
  },
  {
    title: 'Book3',
    author: 'Author3',
    id: 3,
  },
];
const booksReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case REMOVEBOOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
export const addBook = (bookTitle, bookAuthor, bookId) => {
  const book = {
    type: ADDBOOK,
    title: bookTitle,
    author: bookAuthor,
    id: bookId,
  };
  return book;
};
export const removeBook = (bookId) => {
  const removedBook = {
    type: REMOVEBOOOK,
    id: bookId,
  };
  return removedBook;
};

export default booksReducer;
