import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MissionPlaceScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <View
            style={{ width: "100%", height: 60, backgroundColor: "#e2f7f0" }}
          />

          <Text style={styles.title}>{process.env.EXPO_PUBLIC_APP_TITLE}</Text>
          <Text style={styles.title}>미션 장소</Text>

          <View style={{ width: "100%", height: 100 }}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#e2f7f0",
  },
  title: {
    color: "#268367",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#268367",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 8,
  },
  description: {
    color: "gray",
  },
});
