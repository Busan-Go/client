import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import TagItem from "../components/TagItem";
import { Ionicons } from "@expo/vector-icons";
import FollowScrollView from "../components/FollowScrollView";

const tags = [
  "83 타워",
  "김광석 길",
  "디아크",
  "달성공원",
  "감영공원",
  "국채보상운동기념공원",
  "희움 위안부 역사관",
  "서문시장",
  "서남시장",
  "대구 수목원",
  "주교좌 성당",
  "이월드",
];

export default function RecommendScreen({ navigation }) {
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
          <Text style={styles.title}>미션 찾아보기</Text>
          <Text style={styles.subtitle}>지정된 미션 장소를 찾아보세요.</Text>
          <Text style={styles.description}>
            문화유적지부터 놀이공원까지 대구의 명소를 만나보세요!
          </Text>
          <View style={styles.tagContainer}>
            {tags.map((tag, index) => (
              <TagItem key={index} tag={tag} />
            ))}
          </View>
          <Pressable onPress={() => navigation.navigate("MissionPlace")}>
            <View
              style={{
                width: "100%",
                alignItems: "space-around",
                justifyContent: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Text
                  style={{ color: "#5FA790", fontSize: 16, fontWeight: "bold" }}
                >
                  미션 장소 더 알아보기
                </Text>
                <View
                  style={{
                    borderRadius: 50,
                    backgroundColor: "#5FA790",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 32,
                    height: 32,
                  }}
                >
                  <Ionicons
                    name="arrow-forward-sharp"
                    size={32}
                    style={{
                      color: "white",
                      opacity: 1,
                    }}
                  />
                </View>
              </View>
            </View>
          </Pressable>
          <Text style={styles.subtitle}>
            어떤 미션부터 수행할지 고민이라면,
          </Text>
          <Text style={styles.description}>
            다른 유저들의 미션사진을 구경하고 마음에 드는 곳으로 떠나보세요!
          </Text>
          <FollowScrollView />
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
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
});
