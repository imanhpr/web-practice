import { useState } from "react";
import InsertForm from "./components/InsertForm";
import WorkList from "./components/WorkList";

function App() {
  const [rawWorkList, setRawWorkList] = useState([]);

  const handelOnSubmitFormCb = (work) => {
    setRawWorkList([...rawWorkList, work]);
  };
  const handelDeleteById = (id) => {
    const filterdList = rawWorkList.filter((_, index) => index !== id);
    setRawWorkList(filterdList);
  };

  const handelUpdateById = (id, value) => {
    const newRawWorkList = rawWorkList.map((oldValue, index) => {
      if (index === id) {
        return value;
      }
      return oldValue;
    });
    console.log(newRawWorkList);
    setRawWorkList(newRawWorkList);
  };
  return (
    <div className="container">
      <header
        className="card-header"
        style={{ color: "white", marginTop: "4px" }}
      >
        This is a Simple Todo List App
      </header>
      <InsertForm onSubmitForm={handelOnSubmitFormCb} />
      <WorkList
        handelUpdateById={handelUpdateById}
        rawWorkList={rawWorkList}
        handelDeleteById={handelDeleteById}
      />
    </div>
  );
}

export default App;
