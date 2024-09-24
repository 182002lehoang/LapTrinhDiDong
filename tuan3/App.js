import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./App/Screens/Home";
import Home2 from "./App/Screens/Home2";
import Screens3 from "./App/Screens/Screens3";
import Login from "./App/Screens/Login";
import XmEye from "./App/Screens/XmEye";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Home2" component={Home2}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="XmEye" component={XmEye} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Home />
    // <Home2 />
    // (<Login />)
     //(<XmEye />)
  );
}
