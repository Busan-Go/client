import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RecommendScreen from "./screens/RecommendScreen";
import MissionPlaceScreen from "./screens/MissionPlaceScreen";
import MarketScreen from "./screens/MarketScreen";

const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <>
      <Header />
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <HomeScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Register"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <RegisterScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Recommend"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <RecommendScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="MissionPlace"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <MissionPlaceScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Market"
          options={{
            headerShown: false,
          }}
        >
          {(props) => <MarketScreen {...props} />}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </>
  );
}
