import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";
import ImagePicker from "./ImagePicker";

const BottomDrawerExample = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show Bottom Drawer" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.bottomModal}
      >
        <View style={styles.modalContent}>
          <Text>등록할 사진을 촬영 혹은 선택해주세요!</Text>
          <ImagePicker />
          <Button title="Close" onPress={toggleModal} />
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
};

export default BottomDrawerExample;
