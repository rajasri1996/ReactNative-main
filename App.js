import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Getstarted from "./src/screens/Welcomescreens/Getstarted";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./src/screens/Signup/Signup";
import Signupwithphone from "./src/screens/Signup/Signupwithphone";
import Otp from "./src/screens/Signup/Otp";
import Splash from "./src/Splash";
import Optionscreen from "./src/screens/Optionscreen";
// import Riskcalculator from "./src/screens/Riskcalculator/Index";
import Rpscreens from "./src/screens/Riskcalculator/Rpscreens";
import Result from "./src/screens/Riskcalculator/Result";
import Account from "./src/screens/Account/Index";
import Assetpreview from "./src/screens/Assetpreview/Index";
import Navigatescreens from "./src/screens/Navigatescreens/Index";
// import Uploadscreens from "./src/screens/Uploadscreens/Index";
import Corpusscreens from "./src/screens/Corpusscreens/Index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Corpusscreens"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Getstarted" component={Getstarted} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="swphone" component={Signupwithphone} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Optionscreen" component={Optionscreen} />
        {/* <Stack.Screen name="Riskcalculator" component={Riskcalculator} /> */}
        <Stack.Screen name="Rpscreens" component={Rpscreens} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Assetpreview" component={Assetpreview} />
        <Stack.Screen name="Navigatescreens" component={Navigatescreens} />
        {/* <Stack.Screen name="Uploadscreens" component={Uploadscreens} /> */}
        <Stack.Screen name="Corpusscreens" component={Corpusscreens} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
