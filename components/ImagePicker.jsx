import { launchCameraAsync, launchImageLibraryAsync } from "expo-image-picker";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function ImagePicker({ onPress }) {
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
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                width: 200,
                height: 200,
              }}
              onPress={onPress}
            >
              <Text style={{ fontSize: 30, color: "white" }}>Send?</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{ backgroundColor: "lightgray", width: 200, height: 200 }}
          />
        )}
      </View>
      <Pressable style={styles.buttonContainer}>
        <Text onPress={takeImageHandler} style={{ color: "gray" }}>
          직접 촬영
        </Text>
      </Pressable>
      <Pressable style={styles.buttonContainer}>
        <Text onPress={selectImageHandler} style={{ color: "gray" }}>
          앨범에서 선택
        </Text>
      </Pressable>
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
  buttonContainer: {
    width: "100%",
    margin: 4,
    padding: 10,
    borderRadius: 4,
    justifyContent: "center",
    borderColor: "lightgray",
    borderWidth: 1,
  },
});
