import { launchImageLibraryAsync } from "expo-image-picker";
import { View, Button, Image, StyleSheet, Text } from "react-native";
import { useState } from "react";

export default function ImagePicker() {
  const [image, setImage] = useState("");
  async function takeImageHandler() {
    const result = await launchImageLibraryAsync({
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View>
      <View style={styles.image}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
