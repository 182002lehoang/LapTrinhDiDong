import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bai2 from "./bai2";
import Bai3 from "./bai3";
import Bai1 from "./bai1";

const Stack = createNativeStackNavigator();

export default function Stack_Navigation() {
    return (
        // Make sure NavigationContainer is only in the root file
     
            <Stack.Navigator screenOptions={{headerShown : false} }>
                 <Stack.Screen name="Bai1" component={Bai1} />
                <Stack.Screen name="Bai2" component={Bai2} />
                <Stack.Screen name="Bai3" component={Bai3} />
            </Stack.Navigator>
        
    );
}
