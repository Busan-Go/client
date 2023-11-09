import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        <View
          style={{ width: "100%", height: 60, backgroundColor: "#e2f7f0" }}
        />
        <Text style={styles.titleContainer}>
          My {process.env.EXPO_PUBLIC_APP_TITLE}
        </Text>
        <Text style={{ padding: 10, color: "gray" }}>
          내가 달성한 미션을 확인해보세요!
        </Text>
        <View style={styles.tempContainer}>
          <Image
            source={require("../assets/home_banner.png")}
            style={{ width: "100%", height: 320 }}
          />
        </View>
        <Text style={styles.titleContainer}>Get More Log</Text>
        <Text style={{ padding: 10, color: "gray" }}>
          대구 명소에서 더 많은 미션을 수행해보세요!
        </Text>
        <View style={{ flex: 2, flexDirection: "row", padding: 16 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#6AC4A8",
              width: "100%",
              height: "100%",
              margin: 8,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>지금 바로</Text>
            <Text style={{ color: "white", fontSize: 24 }}>
              미션 수행
              <Text style={{ color: "white", fontSize: 12 }}>하기</Text>
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#6AC4A8",
              width: "100%",
              height: "100%",
              margin: 8,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>미션 수행한 곳</Text>
            <Text style={{ color: "white", fontSize: 24 }}>둘러보기</Text>
          </View>
        </View>
        <View style={{ width: "100%", height: 100 }}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2f7f0",
  },
  tempContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "lightgray",
    elevation: 10,
  },
  titleContainer: {
    fontSize: 36,
    color: "#268367",
    paddingHorizontal: 16,
    fontWeight: "bold",
    marginTop: 40,
  },
});
