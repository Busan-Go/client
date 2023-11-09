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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
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
            component={Main}
            options={{
              header: () => {
                return null;
              },
            }}
          />
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
            name="MissionSucess"
            component={MissionSuccessScreen}
            options={{
              header: () => {
                return null;
              },
            }}
          />
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
      <Toast />
    </SafeAreaProvider>
  );
}
