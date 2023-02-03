import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/CreateBook";
import Book from "./models/Book";

function App() {
  const [bookList, setBookList] = useState([]);

  const createBook = (title) => {
    const newBookList = [
      ...bookList,
      new Book({ id: Math.floor(Math.random() * 9999), name: title }),
    ];
    setBookList(newBookList);
    console.log(newBookList);
  };
  const deleteBookById = (id) => {
    const newBookList = bookList.filter((book) => {
      return book.id !== id;
    });
    setBookList(newBookList);
  };
  const updateBookById = (id, title) => {
    const newBookList = bookList.map((book) => {
      if (book.id === id) {
        return new Book({ id, name: title });
      }
      return book;
    });
    setBookList(newBookList);
  };
  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList
        onEdit={updateBookById}
        onDelete={deleteBookById}
        books={bookList}
      />
    </div>
  );
}

export default App;
