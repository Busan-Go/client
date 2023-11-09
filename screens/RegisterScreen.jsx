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
  },
});
