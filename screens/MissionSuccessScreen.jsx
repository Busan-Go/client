import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect } from "react";
import { MyContext } from "../context";
import { Ionicons } from "@expo/vector-icons";

export default function MissionSuccessScreen({ navigation, setWallet }) {
  const { imageUri, placeName } = useContext(MyContext);

  useEffect(() => {
    console.log("Mission Success Screen");
    setWallet((prev) => prev + 200);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 28 }}>
        <Image source={require("../assets/robot2.png")} />
      </View>
      <Text style={styles.title}>미션 성공을 축하드립니다!</Text>
      <Text style={styles.description}>
        `{placeName}`에서의 미션 사진이 성공적으로 인식되었습니다!
      </Text>
      <Text />
      <Text style={styles.title}>+200P</Text>
      <View style={{ position: "relative", marginTop: 30 }}>
        <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />
        <Ionicons
          name="open"
          size={50}
          style={{ position: "absolute", top: 0, right: 0 }}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Market")}
        style={{
          backgroundColor: "#23A67E",
          width: "90%",
          height: 50,
          margin: 20,
          elevation: 3,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>마켓으로 가기</Text>
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
