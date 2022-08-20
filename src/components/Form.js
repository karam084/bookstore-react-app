import { useDispatch } from 'react-redux/es/exports';
import React, { useRef } from 'react';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

  return (
    <>
      <div><h1 className="title">ADD NEW BOOK</h1></div>
      <form className="form">
        <input ref={title} className="book" type="text" name="book" placeholder="Book" required />
        <input ref={author} className="author" type="text" name="author" placeholder="Author" required />
        <button className="submit" type="button" onClick={() => dispatch(addBook(title.current.value, author.current.value, uniqid()))}>Add Book</button>
      </form>
    </>
  )
};

export default Form;
