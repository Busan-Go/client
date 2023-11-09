import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import { useState } from "react";

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
      <Text style={styles.title}>Market</Text>
      <Button title="test" onPress={testHandle} />
      <Text>{test !== "" ? test : "아무것도 못 받음"}</Text>
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
