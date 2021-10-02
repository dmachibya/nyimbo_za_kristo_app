import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  _retrieveDataWatoto,
  _storeDataWatoto,
  _retrieveRemoveWatoto,
  _storeRemoveWatoto,
} from "../utils/data";
import { ToastAndroid } from "react-native";
import { AsyncStorage } from "react-native";

export default function Count() {
  const [watoto, setWatoto] = useState(0);
  const [removeWatoto, setRemoveWatoto] = useState(0);
  const [wazima, setWazima] = useState(0);
  function insertWatoto(number) {
    // alert(Date.now());
    _storeDataWatoto(number)
      .then((response) => {
        // alert(response);
        updateWatoto();
        ToastAndroid.showWithGravity(
          "+" + number.toString(),
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
      .catch((error) => {
        alert(error);
      });
  }
  function insertRemoveWatoto(number) {
    _storeRemoveWatoto(number)
      .then((response) => {
        // alert(response);
        updateWatoto();
        ToastAndroid.showWithGravity(
          "-" + number.toString(),
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
      .catch((error) => {
        alert(error);
      });
  }
  function updateWatoto() {
    var values = [];
    var sum = 0;
    var minus = 0;
    _retrieveDataWatoto().then((response) => {
      // console.log("response", response);
      values = JSON.parse(response);
      values.forEach((element) => {
        sum += element.value;
      });
      setWatoto(sum);
      // console.log(sum);
    });
    _retrieveRemoveWatoto().then((response) => {
      // console.log("response", response);
      console.log("removed", response);
      values = JSON.parse(response);
      values.forEach((element) => {
        sum += element.value;
      });
      setWatoto(sum);
      // console.log(sum);
    });
  }

  // async function test() {
  //   try {
  //     // const array = { Data: [] };
  //     var Data = [];
  //     await AsyncStorage.getItem("Data").then((value) => {
  //       if (value !== null) {
  //         // We have data!!
  //         // const Data = []
  //         Data = JSON.parse(value);
  //         console.log(typeof Data);
  //         alert(Data);

  //         Data.push(1);
  //         // console.log("rarrya", Data);
  //         AsyncStorage.setItem("Data", JSON.stringify(Data)).then(() => {
  //           return "success";
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     return error;
  //   }
  // }
  useEffect(() => {
    updateWatoto();
    // test();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.infoTop}>
        <View>
          <Text style={styles.head2}>Watoto: {watoto}</Text>
          <Text style={styles.head2}>W/Wazima: {wazima}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonLeft}>
          <View>
            <Text>Watoto</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => insertWatoto(10)}
              style={styles.fab1}
            >
              <Text style={styles.buttonText}>+10</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => insertRemoveWatoto(10)}
              style={styles.fab1}
            >
              <Text style={styles.buttonText}>-10</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonRight}>
          <View>
            <Text>W/Wazima</Text>
          </View>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.buttonText}>+10</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.buttonText}>+5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.buttonText}>+2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fab}>
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonLeft: {
    display: "flex",
  },
  buttonRight: {
    display: "flex",
    alignContent: "flex-end",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
  fab: {
    width: 60,
    height: 60,
    backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  fab1: {
    width: 60,
    height: 60,
    backgroundColor: "tomato",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginVertical: 4,
    marginHorizontal: 4,
  },
  head2: {
    fontSize: 24,
    fontWeight: "bold",
  },
  wrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 16,
  },
});
