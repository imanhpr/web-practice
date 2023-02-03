import { useState } from "react";

function WorkCard({ text, index, onDelete, onEditSubmit }) {
  const [submitBtnFlag, setSubmitBtnFlag] = useState(false);
  const [textPlace, setTextPlace] = useState(<span>{text}</span>);
  const [editValue, setEditValue] = useState(text);
  const handelOnClickDelete = () => {
    onDelete(index);
  };
  const handelOnEdit = () => {
    setSubmitBtnFlag(true);
    const handelOnChange = (e) => {
      setEditValue(e.target.value);
    };
    setTextPlace(<input type="text" onChange={handelOnChange} />);
  };
  const handelOnSubmit = () => {
    setSubmitBtnFlag(false);
    onEditSubmit(index, editValue);
    setTextPlace(editValue);
  };
  return (
    <article data-theme="dark" style={{ color: "white" }}>
      <div>
        ID : <span style={{ color: "skyblue" }}>{index}</span>
        <br />
        {textPlace}
      </div>
      <div className="card-footer">
        <button
          onClick={handelOnClickDelete}
          className="secondary"
          style={{ maxWidth: "10%", marginTop: "8px" }}
        >
          Delete
        </button>
        <button
          onClick={handelOnEdit}
          style={{ maxWidth: "10%", marginTop: "8px" }}
        >
          Edit
        </button>
        {submitBtnFlag ? (
          <button
            onClick={handelOnSubmit}
            style={{ maxWidth: "10%", marginTop: "8px" }}
          >
            submit
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default WorkCard;
