import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import ShowSongScreen from "./screens/ShowSongScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AboutScreen from "./screens/AboutScreen";
import SearchScreen from "./screens/SearchScreen";

import * as RootNavigation from "./RootNavigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [text, onChangeText] = React.useState("");

  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Nyimbo za Kristo",

            headerRight: () => (
              <View style={styles.headerRight}>
                <TouchableOpacity
                  onPress={() => RootNavigation.navigate("Search")}
                >
                  <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ marginLeft: 8 }}
                  onPress={() => RootNavigation.navigate("About")}
                >
                  <Feather
                    style={{ marginHorizontal: 8 }}
                    name="more-vertical"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Song"
          component={ShowSongScreen}
          options={({ route }) => ({ title: route.params.title })}
        ></Stack.Screen>
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About This App" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "About This App" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return <HomeScreen></HomeScreen>;
}

const styles = StyleSheet.create({
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    flex: 1,
  },
});
