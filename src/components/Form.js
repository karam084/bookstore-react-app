const Form = () => (
  <>
    <div><label className="title">ADD NEW BOOK</label></div>
    <form className="form">
      <input type="text" name="book" placeholder="Book" className="book" />
      <input type="text" name="author" placeholder="Author" className="author" />
      <button type="submit" value="Add" className="submit">Add Book</button>
    </form>
  </>
);

export default Form;
