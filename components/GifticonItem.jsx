import { View, Text, StyleSheet, Image } from "react-native";

export default function GifticonItem({ shop }) {
  return (
    <View style={styles.gifticonContainer}>
      <View
        style={{
          width: 100,
          height: 120,
          backgroundColor: "lightgray",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        <Image source={shop.image} style={{ width: 100, heigth: 100 }} />
      </View>
      <View style={{ padding: 8, justifyContent: "space-around" }}>
        <Text style={styles.subtitle}>{shop.name}</Text>
        <Text style={styles.subtitle}>
          {shop.menu} |<Text> {shop.price}P</Text>
        </Text>

        <Text>{shop.description}</Text>
      </View>
      <View
        style={{
          backgroundColor: "#E2F7F0",
          position: "absolute",
          right: -25,
          top: 35,
          width: 50,
          height: 50,
          borderRadius: 50,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  gifticonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    width: "100%",
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
    elevation: 3,
    overflow: "hidden",
  },
  subtitle: {
    color: "#268367",
    fontSize: 16,
    fontWeight: "bold",
  },
});
