import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Text,
  Image,
} from "react-native";
import { useState } from "react";

export default function NameInput({ onNewName, onClose, visible }) {
  const [name, setName] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);
  const nameChangeHandler = (value) => {
    setName(value);
  };
  const submitHandler = () => {
    onNewName(name);
    setName("");
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 1000);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/user.png")} />
        {successMsg && (
          <Text style={styles.success}>
            New user has just added successfully
          </Text>
        )}
        <TextInput
          style={styles.nameInput}
          placeholder="Enter a name"
          value={name}
          onChangeText={nameChangeHandler}
        />
        <Button title="Submit" onPress={submitHandler} />
        <Button title="Close" color="red" onPress={() => onClose(false)} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    rowGap: 20,
  },
  image: {
    height: 128,
    width: 128,
    alignSelf: "center",
  },

  nameInput: {
    borderColor: "blue",
    borderWidth: 1,
    marginRight: 4,
    borderRadius: 5,
    paddingHorizontal: 16,
    height: 64,
    fontSize: 22,
  },
  success: {
    color: "green",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    padding: 5,
    borderRadius: 6,
  },
});
