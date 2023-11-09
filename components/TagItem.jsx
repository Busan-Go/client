import { Pressable, StyleSheet, Text } from "react-native";

export default function TagItem({ tag }) {
  return (
    <Pressable style={styles.tagContainer}>
      <Text>{tag}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tagContainer: {
    backgroundColor: "white",
    borderColor: "#6AC4A8",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    elevation: 3,
  },
});
