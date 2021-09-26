import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import Number from "../Components/Number";
import ShowSong from "../Components/ShowSong";
const data = require("./../data/swahili.json");

export default function ShowSongScreen({ route, navigation }) {
  const { content } = route.params;

  item = data[content].content;
  return (
    <SafeAreaView>
      {/* header */}
      {/* <Header headerTitle={data[0].title}></Header> */}

      {/* main contents */}

      <ShowSong content={item} navigation={navigation}></ShowSong>
      <Number></Number>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    position: "absolute",
    top: 32 || StatusBar.currentHeight || 32,
  },
});
