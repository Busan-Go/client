import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import BottomDrawer from "../components/BottomDrawer";
import ExampleScrollView from "../components/ExampleScrollView";

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{process.env.EXPO_PUBLIC_APP_TITLE}</Text>
      <Text style={styles.title}>미션 수행하기</Text>
      <Text>미션을 수행하고 댈로그를 남겨보세요!</Text>
      <Text style={styles.subtitle}>How to</Text>
      <Text style={styles.description}>
        아래의 미션수행하기 버튼을 눌러 사진을 촬영하세요. 델로그 AI가 사진을
        검토하여 포인트로 적립해 줄거에요!
      </Text>
      <Text style={styles.subtitle}>Where to</Text>
      <Text style={styles.description}>
        어디부터 가야할 지 잘 모르겠다면, 위의 화살표 버튼을 눌러보세요. 역사적
        공간부터 수목원까지 대구의 명소들을 방문하며 미션을 수행하세요!
      </Text>
      <Text style={styles.subtitle}>Example</Text>
      <ExampleScrollView />
      <BottomDrawer />
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
