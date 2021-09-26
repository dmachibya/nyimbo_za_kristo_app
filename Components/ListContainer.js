import React from "react";
import { View, Text, FlatList } from "react-native";
const data = require("./../data/swahili.json");
import { useNavigation } from "@react-navigation/core";

export default function ListContainer({ navigation }) {
  return (
    <FlatList
      data={data}
      renderItem={ListItem}
      keyExtractor={(item) => item.number}
    ></FlatList>
  );
}

function ListItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {}} style={styles.list}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );
}
