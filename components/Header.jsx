import { Appbar } from "react-native-paper";
import { StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <Appbar.Header>
      <HeaderLogo />
      <Appbar.Content title="" />
      <Appbar.Action icon="bell" onPress={() => {}} />
      <Appbar.Action icon="human" onPress={() => {}} />
    </Appbar.Header>
  );
}

function HeaderLogo() {
  return <Image source={require("../assets/logo.png")} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    width: 90,
    height: 50,
    margin: 10,
  },
});
