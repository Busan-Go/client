import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: "#268367",
          paddingHorizontal: 10,
          fontWeight: "bold",
        }}
      >
        My Delog
      </Text>
      <Text style={{ padding: 10, color: "gray" }}>
        내가 달성한 미션을 확인해보세요!
      </Text>
      <View style={styles.tempContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e2f7f0",
  },
  tempContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "lightgray",
  },
});
