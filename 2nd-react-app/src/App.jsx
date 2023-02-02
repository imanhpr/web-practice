import { useState } from "react";

import InputForm from "./components/InputForm";
import Card from "./components/Card";

function App() {
  const [cardList, setCardList] = useState([]);
  const handelOnSubmitInputForm = (value) => {
    setCardList([
      ...cardList,
      <Card
        value={value}
        index={cardList.length + 1}
        key={cardList.length + 1}
      />,
    ]);
  };

  return (
    <div>
      <InputForm onSubmit={handelOnSubmitInputForm} />
      <div>{cardList}</div>
    </div>
  );
}

export default App;
