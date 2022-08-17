const ADDBOOK = 'bookstore-react-ap/books/ADDBOOK';
const REMOVEBOOOK = 'bookstore-react-ap/books/REMOVEBOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADDBOOK':
      return [state, action.payload];
    case 'REMOVEBOOOK':
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
export const addBook = () => {
  const book = {
    type: ADDBOOK,
  };
  return book;
};
export const removeBook = (bookId) => {
  const removedBook = {
    type: REMOVEBOOOK,
    payload: bookId,
  };
  return removedBook;
};

export default booksReducer;
