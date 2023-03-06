import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import NameItem from "./components/NameItem";
import NameInput from "./components/NameInput";

export default function App() {
  const [nameList, setNameList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const newNameHandler = (newName) => {
    setNameList((lst) => [
      ...lst,
      { id: Math.floor(Math.random() * 10_000), name: newName },
    ]);
  };
  const deleteHandler = (id) => {
    const filterd = nameList.filter((item) => item.id !== id);
    setNameList(filterd);
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add a new name"
        color="#162a8c"
        onPress={() => setShowModal(true)}
      />
      {showModal && (
        <NameInput onNewName={newNameHandler} onClose={setShowModal} />
      )}
      <Text>Name List :</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={nameList}
          renderItem={({ item, index }) => (
            <NameItem item={item} index={index} onDelete={deleteHandler} />
          )}
          persistentScrollbar={true}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#c9c9c9",
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  listContainer: {
    rowGap: 8,
  },
  nameElement: {
    borderWidth: 1,
    fontSize: 24,
    color: "white",
    backgroundColor: "#4766ff",
    borderColor: "black",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
});
