import { Image, StyleSheet } from "react-native";

export default function HeaderLogo() {
  return <Image source={require("../assets/logo.png")} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    marginVertical: 8,
  },
});
