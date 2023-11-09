import { ScrollView, StyleSheet, View, Text } from "react-native";
import SearchingBar from "../components/SearchingBar";

export default function MissionPlaceScreen({ navigation }) {
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
          <Text style={styles.description}>
            대이로그는 총 246개의 미션장소를 제공합니다. 미션을 수행하고 싶은
            곳을 검색해보세요.
          </Text>
          <SearchingBar
            navigation={navigation}
            defaultValue=""
            visibleModal={true}
            setTextDataItem={() => {}}
          />
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    height: 40,
    backgroundColor: "white",
  },
  clearButton: {
    position: "absolute",
    right: 10,
  },
});
