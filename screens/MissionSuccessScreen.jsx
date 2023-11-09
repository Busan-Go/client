import { Image, StyleSheet, Text, View } from "react-native";

export default function MissionSuccessScreen() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 28 }}>
        <Image source={require("../assets/robot2.png")} />
      </View>
      <Text style={styles.title}>미션 성공을 축하드립니다!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e2f7f0",
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#268367",
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#268367",
  },
});
