import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../Components/Header";
import ListContainer from "../Components/ListContainer";
import Number from "../Components/Number";
// useNavigation
const data = require("./../data/titles.json");

export default function HomeScreen({ navigation }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      data[i].id = i;
    }
    console.log(data[i]);

    setSongs(data);
  }, []);

  return (
    <SafeAreaView>
      {/* header */}
      {/* <Header headerTitle="Nyimbo za Kristo"></Header> */}

      {/* main contents */}
      <FlatList
        data={songs}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              item;
              navigation.navigate("Song", {
                title: item.title,
                content: index,
              });
            }}
            style={styles.list}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        onItemClicked={() => {
          console.log("item clicked");
          navigation.navigate("Song");
        }}
      ></FlatList>
      <Number></Number>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
