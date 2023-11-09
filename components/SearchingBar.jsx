import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { tags } from "../data";
import { useState, useEffect } from "react";
import CustomArrow from "./CustomArrow";

export default function SearchingBar({
  navigation,
  defaultValue,
  visibleModal,
  setTextDataItem,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (defaultValue !== "") {
      setSearchTerm(defaultValue);
    }
  }, [defaultValue]);

  // 모달을 열고 선택된 아이템을 설정하는 함수
  const openModalWithItem = (item) => {
    setSelectedItem(item);
    setSearchTerm(item);
    setModalVisible(true);
    setTextDataItem(item);
  };

  const onSuggestionPressed = (suggestion) => {
    openModalWithItem(suggestion);
    setIsAccordionOpen(false);
  };

  function fetchSuggestions(text) {
    // API 호출 또는 로컬 데이터 필터링 로직
    // 결과를 setSuggestions로 상태 업데이트
    setSearchTerm(text);
    if (text.length >= 1) {
      temp = [];
      tags.forEach((tag) => {
        if (tag.includes(text)) {
          temp.push(tag);
        }
      });
      setSuggestions(temp);
      setIsAccordionOpen(true);
    } else {
      setIsAccordionOpen(false);
    }
  }

  const clearInput = () => {
    setSearchTerm("");
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={fetchSuggestions}
          value={searchTerm}
          placeholder="Type place.."
          underlineColor="white"
          autoFocus
        />
        <Pressable onPress={clearInput} style={styles.clearButton}>
          <Ionicons name="md-close-circle" size={30} color="lightgray" />
        </Pressable>
      </View>
      {isAccordionOpen && (
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
            width: "100%",
            height: 200,
            overflow: "scroll",
            borderWidth: 1,
            borderColor: "lightgray",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <Pressable
              key={index}
              onPress={() => onSuggestionPressed(suggestion)}
              style={{
                padding: 8,
                borderBottomWidth: 1,
                borderBottomColor: "lightgray",
              }}
            >
              <Text>{suggestion}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <Modal
        transparent={true}
        visible={modalVisible && visibleModal}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={styles.overlay}
          activeOpacity={1}
          onPressOut={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{}}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  {selectedItem}
                </Text>
                <Pressable>
                  <Text>대구 중구 달성로 50 서문시장</Text>
                </Pressable>
              </View>
              <CustomArrow
                onPress={() => {
                  navigation.navigate("Register", {
                    item: selectedItem,
                  });
                }}
              />
            </View>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#e2f7f0",
  },
  title: {
    color: "#268367",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#268367",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 8,
  },
  description: {
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden",
    margin: 20,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 8,
    height: 30,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 4,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  clearButton: {
    position: "absolute",
    right: 10,
  },
});
