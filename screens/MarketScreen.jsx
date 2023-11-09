import { ScrollView, StyleSheet, View, Text } from "react-native";
import axios from "axios";
import { useState } from "react";
import GifticonItem from "../components/GifticonItem";

const shoplist = [
  {
    name: "은희네 우동집",
    menu: "꼬마김밥 한 줄",
    price: 300,
    description: "대구 수성구 지산로 47 올리브김밥천국",
  },
  {
    name: "중앙떡볶이",
    menu: "주먹밥 한 개",
    price: 250,
    description: "대구 중구 동성로2길 81 중앙떡볶이",
  },
  {
    name: "상근이네 오뎅집",
    menu: "어묵꼬지 한 개",
    price: 210,
    description: "대구 수성구 지산로 47 올리브김밥천국",
  },
  {
    name: "구삼커피",
    menu: "쿠키 한 개",
    price: 500,
    description: "대구 중구 봉산문화2길 16-3 구삼커피",
  },
];

export default function MarketScreen() {
  const [test, setTest] = useState("");
  function testHandle() {
    console.log(`${process.env.EXPO_PUBLIC_API_URL}/api/test`);
    axios
      .get(`${process.env.EXPO_PUBLIC_API_URL}/api/users`)
      .then((res) => {
        console.log(res);
        console.log(res.data.users);
        setTest(res.data.users[0].username);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#268367",
          padding: 200,
          position: "absolute",
          borderRadius: 200,
          top: -100,
          left: -50,
          zIndex: 0,
        }}
      />
      <ScrollView
        style={{ width: "100%", height: "100%" }}
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
          <View
            style={{
              width: "100%",
              height: 60,
              backgroundColor: "transparent",
              zIndex: -1,
            }}
          />
          <Text style={styles.title}>{process.env.EXPO_PUBLIC_APP_TITLE}</Text>
          <Text style={styles.title}>Point Shop</Text>
          <Text style={{ color: "#F3BF26", fontSize: 20, marginTop: 10 }}>
            보유 포인트 | 750P
          </Text>
        </View>
        {shoplist.map((shop, index) => (
          <GifticonItem key={index} shop={shop} />
        ))}
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
    color: "white",
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
