import React, { useState } from "react";
import { View, Text, Button, Pressable } from "react-native";
import Modal from "react-native-modal";
import ImagePicker from "./ImagePicker";
import { FAB, Icon } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const BottomDrawerExample = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <FAB icon="camera" onPress={toggleModal} style={styles.fabContainer} />
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.bottomModal}
      >
        <View style={styles.modalContent}>
          <Text>등록할 사진을 촬영 혹은 선택해주세요! </Text>
          <ImagePicker />
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
};

const styles = {
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
    margin: 20,
  },
  closeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 20,
  },
};

export default BottomDrawerExample;
