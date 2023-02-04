import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/CreateBook";
import Book from "./models/Book";

function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooks = async () => {
    const data = await (await fetch("http://localhost:8000/books")).json();
    setBookList(data);
  };

  const deleteBook = async (book_id) => {
    await fetch("http://localhost:8000/books/" + book_id, { method: "DELETE" });
  };

  const createBook = async (title) => {
    const postBook = await fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: title }),
    });
    if (postBook.status !== 201) {
      console.log("ERROR");
      return;
    }
    const jsonData = await postBook.json();
    const newBookList = [...bookList, new Book(jsonData)];
    setBookList(newBookList);
    console.log(newBookList);
  };
  const deleteBookById = async (id) => {
    await deleteBook(id);
    const newBookList = bookList.filter((book) => {
      return book.id !== id;
    });
    setBookList(newBookList);
  };
  const updateBookById = async (id, title) => {
    await fetch("http://localhost:8000/books/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title }),
    });
    const newBookList = bookList.map((book) => {
      if (book.id === id) {
        return new Book({ id, name: title });
      }
      return book;
    });
    setBookList(newBookList);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
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
