import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import HTML from "react-native-render-html";
import { MaterialIcons } from "@expo/vector-icons";
import { removeElement } from "domutils";

function onElement(element) {
  // Remove the first two children of an ol tag.
  if (element.tagName === "h1") {
    removeElement(element);
  }
}

const domVisitors = {
  onElement: onElement,
};

export default function ShowSong({ content }) {
  const contentWidth = useWindowDimensions().width;

  return (
    <ScrollView style={styles.container}>
      {/* <Text>{content}</Text> */}
      <HTML
        style={styles.content}
        source={{ html: content }}
        tagsStyles={{ div: { fontSize: 20, color: "#1b1b1b" } }}
        contentWidth={contentWidth}
        domVisitors={domVisitors}
      />
      {/* <Text>Testing</Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#FF8C3D",
    position: "absolute",
    bottom: 6,
    right: 10,
  },
  container: {
    padding: 16,
    fontSize: 48,
  },
  content: {
    fontSize: 24,
  },
});
