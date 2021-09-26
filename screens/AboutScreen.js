import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Nyimbo Za Kristo
        </Text>
        <Text>Version: 1.0.0</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 12 }}>
          About Developer
        </Text>
        <Text>
          This app was created by David Machibya, a Web and Mobile Developer.
        </Text>
        <Text>Contact me through +255 753 759 016, dmachibya@gmail.com</Text>
        {/* <Text style={{ fontWeight: "bold", marginTop: 12 }}>
          Connect With Me
        </Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
