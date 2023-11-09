import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RecommendScreen from "./screens/RecommendScreen";
import { View } from "react-native";

const BottomTab = createBottomTabNavigator();

export default function Main({ navigation }) {
  return (
    <>
      <Header />
      <View style={{ width: "100%", height: 60, backgroundColor: "#e2f7f0" }} />
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          options={{
            header: () => {
              return null;
            },
          }}
        >
          {() => <HomeScreen />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Register"
          options={{
            header: () => {
              return null;
            },
          }}
        >
          {() => <RegisterScreen />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Recommend"
          options={{
            header: () => {
              return null;
            },
          }}
        >
          {() => <RecommendScreen />}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </>
  );
}
