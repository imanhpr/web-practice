import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderdBooks = books.map((book) => (
    <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  ));
  return (
    <div>
      <h5>BookList :</h5>
      <div>{renderdBooks}</div>
    </div>
  );
}

export default BookList;
