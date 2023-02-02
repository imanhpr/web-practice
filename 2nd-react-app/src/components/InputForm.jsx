import { useState } from "react";

function InputForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const handelOnChange = (event) => {
    setInputValue(event.target.value);
  };
  const handelOnSubmit = (event) => {
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <div>
      <label>Say something: </label>
      <input
        placeholder="SomeThing"
        value={inputValue}
        onChange={handelOnChange}
      />
      <button onClick={handelOnSubmit}>Submit</button>
    </div>
  );
}

export default InputForm;
