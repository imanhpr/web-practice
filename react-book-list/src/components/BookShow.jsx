import { useState } from "react";
import EditBook from "./EditBook";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(true);
  const toggelEdit = () => {
    setShowEdit(!showEdit);
  };
  const handelClickDelete = () => {
    onDelete(book.id);
  };
  const handelOnEdit = (id, title) => {
    setShowEdit(true);
    onEdit(id, title);
  };
  const editForm = <EditBook onEdit={handelOnEdit} book={book} />;
  const title = (
    <div>
      <span>
        index : <span style={{ color: "red" }}>{book.id}</span>
      </span>
      <span> - </span>{" "}
      <span>
        Book Name : <span style={{ color: "blue" }}>{book.name}</span>
      </span>
    </div>
  );
  return (
    <div
      style={{
        border: "0.5px solid",
        padding: "6px",
        margin: "12px",
        borderRadius: "5px",
      }}
    >
      {showEdit ? title : editForm}
      {showEdit ? <button onClick={toggelEdit}>Edit</button> : null}
      <button onClick={handelClickDelete}>delete</button>
    </div>
  );
}

export default BookShow;
