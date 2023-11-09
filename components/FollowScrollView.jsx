import { ScrollView, Image, View, StyleSheet } from "react-native";

const imageSize = 150;

export default function FollowScrollView() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", marginTop: 10 }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/example1.png")}
          style={{ width: imageSize, height: imageSize }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/example2.png")}
          style={{ width: imageSize, height: imageSize }}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/example1.png")}
          style={{ width: imageSize, height: imageSize }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: { marginRight: 10, borderRadius: 10, overflow: "hidden" },
});
