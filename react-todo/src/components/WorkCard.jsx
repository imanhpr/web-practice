function WorkCard({ text, index, onDelete }) {
  const handelOnClickDelete = () => {
    onDelete(index);
  };
  return (
    <article data-theme="dark" style={{ color: "white" }}>
      <div>
        ID : <span style={{ color: "skyblue" }}>{index}</span>
        <br />
        <span>{text}</span>
      </div>
      <div className="card-footer">
        <button
          onClick={handelOnClickDelete}
          className="secondary"
          style={{ maxWidth: "10%", marginTop: "8px" }}
        >
          Delete
        </button>
        <button style={{ maxWidth: "10%", marginTop: "8px" }}>Edit</button>
      </div>
    </article>
  );
}

export default WorkCard;
