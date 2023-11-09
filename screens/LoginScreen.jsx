import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      showToast("error", "Please enter username and password");
      return;
    }

    console.log("로그인 시도", username, password);
    if (username === "user" && password === "1234") {
      showToast("success", "Login is successful!");
      navigation.navigate("Home");
    } else {
      showToast("error", "Login is failed..");
    }
  };

  function showToast(type, text) {
    Toast.show({
      type: type,
      text1: text,
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="아이디"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
