import { StyleSheet } from "react-native";
import { View } from "react-native";
import BottomDrawer from "../components/BottomDrawer";
import Title from "../components/Title";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Title />
      <BottomDrawer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
});
