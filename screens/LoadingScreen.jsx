import { Image, StyleSheet, Text, View } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 28 }}>
        <Image source={require("../assets/robot1.png")} />
      </View>
      <Text style={styles.title}>대이로그AI가</Text>
      <Text style={styles.title}>미션 사진을 검증하는 중입니다.</Text>
      <View
        style={{
          height: 60,
          backgroundColor: "#268367",
          width: 2,
          marginVertical: 16,
          marginBottom: 20,
        }}
      />
      <Text style={styles.subtitle}>
        대이로그AI란, 대구광역시의 관광명소의 이미지를 학습하여 등록된
        미션사진의 장소와 진위여부를 판단하는 AI 모델입니다.{" "}
      </Text>
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
