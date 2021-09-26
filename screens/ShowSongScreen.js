import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../Components/Header";
import ShowSong from "../Components/ShowSong";
const data = require("./../data/swahili.json");

export default function ShowSongScreen({ route, navigation }) {
  const { content } = route.params;
  return (
    <SafeAreaView style={styles.fixed}>
      {/* header */}
      {/* <Header headerTitle={data[0].title}></Header> */}

      {/* main contents */}

      <ShowSong content={content} navigation={navigation}></ShowSong>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixed: {
    position: "absolute",
    top: 32 || StatusBar.currentHeight || 32,
  },
});
