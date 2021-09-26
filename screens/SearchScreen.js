import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
const data = require("./../data/swahili.json");

export default function SearchScreen() {
  const [text, onChangeText] = useState("");

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      data[i].id = i;
    }

    setSongs(data);
  }, []);

  const filtered = [];
  //   const onSearch = () => {
  //     // onChangeText(text.toLowerCase());
  //     // for (var i = 0; i < songs.length; i++) {
  //     //   if (songs[i].title.toLowerCase().search(text) > -1) {
  //     //     filtered.push(songs[i]);
  //     //   }
  //     }

  //     setSongs(filtered);
  //   };
  return (
    <View>
      <View style={{ width: "100%" }}>
        <TextInput
          style={styles.input}
          onChangeText={() => {
            // onSearch();
          }}
          value={text}
          placeholder="Tafuta wimbo"
        />
      </View>
      <FlatList
        data={songs}
        renderItem={({ item, index }) => (
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
        keyExtractor={(item, index) => item.id.toString()}
        onItemClicked={() => {
          console.log("item clicked");
          navigation.navigate("Song");
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  list: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
