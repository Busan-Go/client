import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./Main";
import LoadingScreen from "./screens/LoadingScreen";
import MissionSuccessScreen from "./screens/MissionSuccessScreen";
import MissionFailScreen from "./screens/MissionFailScreen";
import { useState } from "react";
import { MyContext } from "./context";

const Stack = createNativeStackNavigator();

export default function App() {
  const [wallet, setWallet] = useState(750);
  const [imageUri, setImageUri] = useState("");

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <MyContext.Provider value={{ wallet, setWallet, imageUri, setImageUri }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                header: () => {
                  return null;
                },
              }}
            />
            <Stack.Screen
              name="Main"
              options={{
                header: () => {
                  return null;
                },
              }}
            >
              {(props) => (
                <Main {...props} wallet={wallet} setWallet={setWallet} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Loading"
              component={LoadingScreen}
              options={{
                header: () => {
                  return null;
                },
              }}
            />
            <Stack.Screen
              name="MissionSuccess"
              options={{
                header: () => {
                  return null;
                },
              }}
            >
              {(props) => (
                <MissionSuccessScreen {...props} setWallet={setWallet} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="MissionFail"
              component={MissionFailScreen}
              options={{
                header: () => {
                  return null;
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
      <Toast />
    </SafeAreaProvider>
  );
}
