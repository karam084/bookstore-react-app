const ADDBOOK = 'bookstore-react-ap/books/ADDBOOK';
const REMOVEBOOOK = 'bookstore-react-ap/books/REMOVEBOOK';

const booksReducer = (state = [], action) => {
    switch (action.type) {
        // do reducer stuff
        case 'ADDBOOK':
            return [state, {
                id: action.id,
                title: action.title,
                author: action.author,
            }];
        case 'REMOVEBOOOK':
            return state.filter((book) => book.id !== action.id);

        default: return state;
    }
}
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
