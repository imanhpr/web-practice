import { useState } from "react";

function EditBook({ book, onEdit }) {
  const [title, setTitle] = useState(book.name);
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, title);
  };
  return (
    <form onSubmit={handelSubmit}>
      <p>
        prevName : <span style={{ color: "blue" }}>{book.name}</span>
      </p>
      <label>New Book Name:</label>
      <input type="text" value={title} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditBook;
