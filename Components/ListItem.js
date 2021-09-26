import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

function ListItem({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {}} style={styles.list}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
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
