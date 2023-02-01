import Card from "./Card";

function CardList({ books, onDelete, onSubmit }) {
  const renderdCards = books.map((title, index) => (
    <Card title={title} key={index} />
  ));
  return (
    <div>
      <div className="container" style={{ marginTop: "18px" }}>
        <div className="flex four center gap">{renderdCards}</div>
      </div>
      <div className="flex">
        <button onClick={onSubmit} className="">
          Add
        </button>
        <button onClick={onDelete} className="error">
          Delete
        </button>
      </div>
    </div>
  );
}

export default CardList;
