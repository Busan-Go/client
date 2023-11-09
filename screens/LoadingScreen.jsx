import { Image, StyleSheet, Text, View } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 28 }}>
        <Image source={require("../assets/robot1.png")} />
      </View>
      <Text style={styles.title}>델로그AI가</Text>
      <Text style={styles.title}>미션 사진을 검증하는 중입니다.</Text>
      <View
        style={{
          height: 60,
          backgroundColor: "#268367",
          width: 2,
          marginVertical: 16,
        }}
      />
      <Text style={styles.subtitle}>델로그AI란, ~~~</Text>
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
