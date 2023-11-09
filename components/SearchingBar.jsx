import { StyleSheet, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export default function SearchingBar({ value, setValue }) {
  const clearInput = () => {
    setValue("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Type place.."
        underlineColor="white"
      />
      {value ? (
        <TouchableOpacity onPress={clearInput} style={styles.clearButton}>
          <Ionicons name="md-close-circle" size={30} color="lightgray" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#e2f7f0",
  },
  title: {
    color: "#268367",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#268367",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 8,
  },
  description: {
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    height: 40,
    backgroundColor: "white",
  },
  clearButton: {
    position: "absolute",
    right: 10,
  },
});
