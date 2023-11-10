import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import RecommendScreen from "./screens/RecommendScreen";
import MissionPlaceScreen from "./screens/MissionPlaceScreen";
import MarketScreen from "./screens/MarketScreen";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default function Main({ wallet, setWallet }) {
  return (
    <>
      <Header />
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="home" />,
          }}
        >
          {(props) => <HomeScreen {...props} wallet={wallet} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Register"
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="send" />,
          }}
        >
          {(props) => <RegisterScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Recommend"
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="thumbs-up" />,
          }}
        >
          {(props) => <RecommendScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Place"
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="map" />,
          }}
        >
          {(props) => <MissionPlaceScreen {...props} />}
        </BottomTab.Screen>
        <BottomTab.Screen
          name="Market"
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="card" />,
          }}
        >
          {(props) => <MarketScreen {...props} wallet={wallet} />}
        </BottomTab.Screen>
      </BottomTab.Navigator>
    </>
  );
}
