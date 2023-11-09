import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RecommendScreen from "./screens/RecommendScreen";
import { View } from "react-native";
import LoadingScreen from "./screens/LoadingScreen";
import MissionPlaceScreen from "./screens/MissionPlaceScreen";

const BottomTab = createBottomTabNavigator();

export default function Main({ navigation }) {
  return (
    <>
      <Header />
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
          {() => <RegisterScreen navigation={navigation} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Recommend"
          options={{
            header: () => {
              return null;
            },
          }}
        >
          {() => <RecommendScreen navigation={navigation} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="MissionPlace"
          options={{
            header: () => {
              return null;
            },
          }}
        >
          {() => <MissionPlaceScreen />}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </>
  );
}
