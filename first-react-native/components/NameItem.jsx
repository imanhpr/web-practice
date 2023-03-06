import { StyleSheet, Text, Pressable, View, Modal } from "react-native";

export default function NameItem({ item, index, onDelete }) {
  const pressHandler = () => onDelete(item.id);
  return (
    <View style={styles.nameElement}>
      <Pressable android_ripple={{ color: "#1e37b3" }} onPress={pressHandler}>
        <Text style={styles.text} key={item.id}>
          {item.name || "Empty"} - {item.id} - {index}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  nameElement: {
    marginVertical: 6,
    borderWidth: 1,
    color: "white",
    backgroundColor: "#4766ff",
    borderColor: "black",
    borderRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 24,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
