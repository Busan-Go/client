import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>{process.env.EXPO_PUBLIC_APP_TITLE}</Text>
    </View>
  );
}
