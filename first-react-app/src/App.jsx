import { useState } from "react";
import CardList from "./components/CardList";

function App() {
  const [bookList, setBookList] = useState(["book1", "book2"]);
  const handelAddClick = (event) => {
    setBookList([...bookList, "yeAnoterBook"]);
  };
  const handelDeleteClick = () => {
    console.log("yes");
    setBookList(bookList.slice(0, -2));
  };
  return (
    <div>
      <div className="flex demo bg-color">
        <h1 style={{ textAlign: "center" }}>Simple React App</h1>
      </div>
      <CardList
        onDelete={handelDeleteClick}
        onSubmit={handelAddClick}
        books={bookList}
      />
    </div>
  );
}

export default App;
