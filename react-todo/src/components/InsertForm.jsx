import { useState } from "react";

function InsertForm({ onSubmitForm }) {
  const [todoValue, setTodoValue] = useState("");
  const handelOnFormSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(todoValue);
    setTodoValue("");
  };
  const handelOnTodo = (e) => {
    setTodoValue(e.target.value);
  };
  return (
    <div>
      <form className="form" onSubmit={handelOnFormSubmit}>
        <label htmlFor="todo">Work todo: </label>
        <input value={todoValue} onChange={handelOnTodo} id="todo" />
        <button type="submit" style={{ maxWidth: 120 }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InsertForm;
