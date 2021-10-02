import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Count from "./screens/Count";
import Statistics from "./screens/Statistics";
import Sessions from "./screens/Sessions";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Count"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Count") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Sessions") {
              iconName = focused ? "settings" : "settings";
            } else if (route.name === "Statistics") {
              iconName = focused ? "pie-chart" : "pie-chart";
            }

            return <Feather name={iconName} size={24} color="black" />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Count" component={Count}></Tab.Screen>
        <Tab.Screen name="Sessions" component={Sessions}></Tab.Screen>
        <Tab.Screen name="Statistics" component={Sessions}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
