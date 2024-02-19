import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Quiz"
          options={{ headerShown: false }}
          component={Quiz}
        />
        <Stack.Screen
          name="Result"
          options={{ headerShown: false }}
          component={Result}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}