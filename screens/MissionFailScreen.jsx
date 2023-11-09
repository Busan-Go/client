import { Image, StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function MissionFailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/robot3.png")} />
      </View>
      <Text style={styles.title}>앗, 미션 실패입니다. </Text>
      <Text style={{ color: "gray" }}>
        대이로그 AI의 검토에 따라, 지정된 대구의 관광명소에서 촬영한 사진이 아닌
        것으로 판별되었습니다.
      </Text>
      <Text style={styles.subtitle}>
        지정된 관광명소에서 찍은 사진이 맞다면?
      </Text>
      <Text style={{ color: "gray" }}>
        사진에서 인물의 비중이 너무 크거나 사진이 심하게 흔들린 경우 인식이 되지
        않을 수 있습니다. 다시 한 번 시도해보세요!
      </Text>
      <Pressable
        style={{
          color: "white",
          backgroundColor: "#23A67E",
          borderRadius: 10,
          padding: 16,
          alignItems: "center",
          elevation: 10,
        }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>
          다시 한 번 시도하기
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e2f7f0",
    padding: 30,
    justifyContent: "space-evenly",
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
