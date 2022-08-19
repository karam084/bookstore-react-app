
import { useDispatch } from 'react-redux/es/exports';
import React, { useRef } from 'react';
import uniqid from 'uniqid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);
  <>
    <div><label className="title">ADD NEW BOOK</label></div>
    <form className="form">
      <input ref={title} type="text" name="book" placeholder="Book" className="book" />
      <input ref={author} type="text" name="author" placeholder="Author" className="author" />
      <button onClick={() => dispatch(addBook(title.current.value, author.current.value, uniqid()))} typeaut="submit" value="Add" className="submit">Add Book</button>
    </form>
  </>
};

export default Form;
