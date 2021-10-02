import { AsyncStorage } from "react-native";

export const _storeDataWatoto = async (number) => {
  const data = {
    time: Date.now(),
    value: number,
  };

  try {
    // const array = { Data: [] };
    var Data = [];
    await AsyncStorage.getItem("Watoto1").then((value) => {
      if (value !== null || value !== undefined) {
        // We have data!!
        // const Data = []
        Data = JSON.parse(value);
        // console.log(typeof Data);
        // alert(Data);
      } else {
        Data = [];
      }
      Data.push(data);
      // console.log("rarrya", Data);
      AsyncStorage.setItem("Watoto1", JSON.stringify(Data)).then(() => {
        return "success";
      });
    });
  } catch (error) {
    return error;
  }
};
export const _storeRemoveWatoto = async (number) => {
  const data = {
    time: Date.now(),
    value: number,
  };

  //   console.log("at remove", number);
  try {
    // const array = { Data: [] };
    var Data = [];
    await AsyncStorage.getItem("RemoveWatoto1").then((value) => {
      //   console.log("at remove", value);
      if (value !== null || value !== undefined || value !== "null") {
        // We have data!!
        // const Data = []
        Data = JSON.parse(value);
        // console.log(typeof Data);
        // alert(Data);
      } else {
        Data = [];
      }
      console.log("at a point", Data);
      Data.push(data);
      // console.log("rarrya", Data);
      AsyncStorage.setItem("RemoveWatoto1", JSON.stringify(Data)).then(() => {
        return "success";
      });
    });
  } catch (error) {
    return error;
  }
};
//   try {
//     //get item if exites
//     const value = await AsyncStorage.getItem("Array");
//     if (value !== null) {
//       //check if it really has data
//       // We have data!!
//       console.log(value);
//       value = [];
//     } else {
//       // convert it to proper json
//       value = JSON.parse(value);
//     }
//     //   if it is not an array create a new array
//     if (typeof value != "object") {
//       value = [];
//     }
//     value.push(data);

//     await AsyncStorage.setItem("Array", JSON.stringify(value)).then(() => {
//       return "success";
//     });
//   } catch (error) {
//     // Error saving data
//     return "error";
//   }

export const _retrieveDataWatoto = async () => {
  try {
    const value = await AsyncStorage.getItem("Watoto1");
    if (value !== null || value !== undefined) {
      // We have data!!
      //   console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    alert(error);
    return [];
  }
};
export const _retrieveRemoveWatoto = async () => {
  try {
    const value = await AsyncStorage.getItem("RemoveWatoto1");
    if (value !== null || value !== undefined) {
      // We have data!!
      //   console.log(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    alert(error);
    return [];
  }
};
