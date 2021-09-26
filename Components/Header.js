import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Header({ headerTitle }) {
  const [title, setTitle] = useState("Nyimbo za Kristo");

  useEffect(() => {
    if (headerTitle !== null) {
      setTitle(headerTitle);
    } else {
      setTitle("Nyimbo za Kristo");
    }
  }, []);
  return (
    <View>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold" }}>{title}</Text>
        <View style={styles.headerRight}>
          <AntDesign name="search1" size={24} color="black" />
          <Feather
            style={{ marginHorizontal: 8 }}
            name="more-vertical"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: "#FF8C3D",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
  },
});
