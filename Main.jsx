import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Header from "./components/Header";

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
          {() => <HomeScreen navigation={navigation} />}
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
      </BottomTab.Navigator>
    </>
  );
}
