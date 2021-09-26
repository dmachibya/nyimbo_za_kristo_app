import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useNavigation } from "@react-navigation/native";

const data = require("./../data/swahili.json");

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
export default function Number() {
  const addNUmber = (number) => {
    // numberString = numberString + number;
    if (number === -1) {
      if (numberString.length > 0) {
        setNumberString(numberString.substring(0, numberString.length - 1));
        // console.log(numberString.substring(0, numberString.length - 1));
      } else {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
    } else {
      if (parseInt(numberString + number) > 220) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      } else {
        setNumberString(numberString + number);
      }
    }
  };

  const [numberString, setNumberString] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const moveToSong = () => {
    let songNo = parseInt(numberString);

    let song = data[songNo - 1];
    setNumberString("");
    setModalVisible(false);

    navigation.navigate("Song", {
      title: song.title,
      content: song.number - 1,
    });
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <MaterialIcons name="dialpad" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ position: "absolute", flex: 1, top: 0 }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
          onPressOut={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1 }}
          >
            <View
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{
                backgroundColor: "#ccffee",
                flex: 1,
                position: "absolute",
                width: "80%",
                left: "10%",
                height: "60%",
                top: "20%",
              }}
            >
              <View style={styles.numberContainer}>
                <View style={styles.ncTop}>
                  <View style={styles.ncTopInt}>
                    <Text style={styles.ncTopIntText}>{numberString}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      addNUmber(-1);
                    }}
                    style={styles.ncTopDel}
                  >
                    <Feather name="delete" size={48} color="black" />
                  </TouchableOpacity>
                </View>
                <View style={styles.ncBottom}>
                  <View style={styles.ncNumbers}>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("1");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("2");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("3");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>3</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ncNumbers}>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("4");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("5");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("6");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>6</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ncNumbers}>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("7");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("8");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("9");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>9</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.ncNumbers}>
                    <TouchableOpacity
                      onPress={() => {
                        addNUmber("0");
                      }}
                      style={styles.ncBox}
                    >
                      <Text style={styles.ncText}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => moveToSong()}
                      style={styles.ncGo}
                    >
                      <Text style={styles.ncGoText}>GO</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </View>
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
  numberContainer: {
    flex: 1,
    backgroundColor: "#555555",
  },
  ncBottom: {
    flexGrow: 3,
  },
  ncTopInt: {
    flexGrow: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 8,
  },
  ncTopIntText: {
    color: "#fff",
    fontSize: 32,
  },
  ncTopDel: {
    width: 80,
    backgroundColor: "#dd8876",
    justifyContent: "center",
    alignItems: "center",
  },
  ncTop: {
    height: 80,
    backgroundColor: "#777777",
    borderBottomColor: "#46b5d1",
    borderBottomWidth: 3,
    borderStyle: "solid",
    flexDirection: "row",
  },
  ncNumbers: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    borderStyle: "solid",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  ncBox: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    borderStyle: "solid",
  },
  ncText: {
    color: "#ffffff",
    fontSize: 24,
  },
  ncGo: {
    backgroundColor: "#46b5d1",
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  ncGoText: {
    fontSize: 24,
    color: "#111",
  },
});
