import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function HomeScreen({ wallet }) {
  return (
    <View style={styles.container}>
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        <View
          style={{ width: "100%", height: 20, backgroundColor: "#e2f7f0" }}
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
            style={{ width: "100%", height: 600 }}
          />
          <View style={{ position: "absolute", top: 36, right: 30 }}>
            <Text style={{ color: "white", fontSize: 50, fontWeight: "bold" }}>
              {wallet}P
            </Text>
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
    height: 600,
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
