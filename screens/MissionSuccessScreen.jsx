import { Image, StyleSheet, Text, View } from "react-native";
import { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { Ionicons } from "@expo/vector-icons";

export default function MissionSuccessScreen({ navigation, setWallet }) {
  const { imageUri } = useContext(MyContext);

  useEffect(() => {
    console.log("Mission Success Screen");
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
    setWallet((prev) => prev + 200);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 28 }}>
        <Image source={require("../assets/robot2.png")} />
      </View>
      <Text style={styles.title}>미션 성공을 축하드립니다!</Text>
      <View style={{ position: "relative" }}>
        <Image source={{ uri: imageUri }} style={{ width: 300, height: 300 }} />
        <Ionicons
          name="open"
          size={50}
          style={{ position: "absolute", top: 0, right: 0 }}
        />
      </View>
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
