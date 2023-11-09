import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomArrow({ onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        borderRadius: 50,
        backgroundColor: "#5FA790",
        justifyContent: "center",
        alignItems: "center",
        width: 32,
        height: 32,
      }}
    >
      <Ionicons
        name="arrow-forward-sharp"
        size={32}
        style={{
          color: "white",
          opacity: 1,
        }}
      />
    </Pressable>
  );
}
