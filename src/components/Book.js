import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (books.map((book) => (

    <div key={book.id} className="card">
      <div className="title">
        <span>Action</span>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <div className="action-buttons">
          <button className="button-outline" type="button">Comments</button>
          <div className="vertical-divider" />
          <button
            onClick={
              (e) => {
                e.preventDefault();
                dispatch(removeBook(book.id));
              }
            }
            className="button-outline"
            type="button"
          >
            Remove
          </button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button">Edit</button>
        </div>
      </div>

      <div className="progress">
        <h4>60%</h4>
      </div>
      <div className="chapter">
        <h4>Current Chapter</h4>
        <h5>Chapter 16</h5>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  )));
};

export default Book;
