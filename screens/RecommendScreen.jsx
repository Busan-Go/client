import { View, Text, StyleSheet } from "react-native";

export default function RecommendScreen() {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 60, backgroundColor: "#e2f7f0" }} />
      <Text>RecommendScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e2f7f0",
  },
});
