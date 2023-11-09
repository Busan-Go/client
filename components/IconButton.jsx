import { Pressable } from "react-native";
import { Icon } from "react-native-paper";

export default function IconButton({ icon, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Icon name={icon} size={24} />
    </Pressable>
  );
}
