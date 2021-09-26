import { useNavigation } from "@react-navigation/core";
import React from "react";
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
// useNavigation
const data = require("./../data/swahili.json");

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      {/* header */}
      {/* <Header headerTitle="Nyimbo za Kristo"></Header> */}

      {/* main contents */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              item;
              navigation.navigate("Song", {
                title: item.title,
                content: item.content,
              });
            }}
            style={styles.list}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.number}
        onItemClicked={() => {
          console.log("item clicked");
          navigation.navigate("Song");
        }}
      ></FlatList>
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
