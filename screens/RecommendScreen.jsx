import { View, Text, StyleSheet } from "react-native";

export default function RecommendScreen() {
  return (
    <View style={styles.container}>
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
