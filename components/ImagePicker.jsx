import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import { View, Button, Image, StyleSheet } from "react-native";
import { useState } from "react";

export default function ImagePicker() {
  const [image, setImage] = useState("");
  async function selectImageHandler() {
    const result = await launchImageLibraryAsync({
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function takeImageHandler() {
    const result = await launchCameraAsync({
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <>
      <View style={styles.image}>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ) : (
          <View
            style={{ backgroundColor: "lightgray", width: 200, height: 200 }}
          ></View>
        )}
      </View>
      <Button title="촬영" onPress={takeImageHandler} />
      <Button title="선택" onPress={selectImageHandler} />
    </>
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
