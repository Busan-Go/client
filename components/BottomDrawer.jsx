import { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import ImagePicker from "./ImagePicker";
import { FAB } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import SearchingBar from "./SearchingBar";

export default function BottomDrawer({ navigation, visible, defaultValue }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    // db에서 관광지 검색
    if (visible) {
      setModalVisible(true);
    }
    console.log(text);
  }, [text, visible]);

  function toggleModal() {
    setModalVisible(!isModalVisible);
  }

  function sendImageHandle() {
    console.log("이미지 전송!");
    navigation.navigate("Loading");
  }

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <FAB
        icon="camera"
        onPress={toggleModal}
        style={styles.fabContainer}
        backgroundColor="#23A67E"
        color="white"
      />
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.bottomModal}
      >
        <View style={styles.modalContent}>
          <SearchingBar navigation={navigation} defaultValue={defaultValue} />
          <Text>등록할 사진을 촬영 혹은 선택해주세요! </Text>
          <ImagePicker onPress={sendImageHandle} />
          <Pressable onPress={toggleModal} style={styles.closeContainer}>
            <Ionicons
              name="close"
              size={24}
              style={{
                backgroundColor: "lightgray",
                borderRadius: 50,
                color: "gray",
              }}
            />
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  fabContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  closeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 20,
  },
});
