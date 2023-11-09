import { StyleSheet } from "react-native";
import { View } from "react-native";
import BottomDrawer from "../components/BottomDrawer";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <BottomDrawer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: { width: "70%", marginTop: 20, padding: 8 },
});
