import { useState } from "react";

function CreateBook({ onCreate }) {
  const [title, setTitle] = useState("");

  const handelChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">Book Title : </label>
        <input
          onChange={handelChangeTitle}
          value={title}
          type="text"
          id="title"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default CreateBook;
