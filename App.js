import { StatusBar } from "expo-status-bar";

import { useState } from "react";
import { CheckBox } from "@react-native-community/checkbox";

import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacityBase,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

let rules = [
  {
    field: "TEXT-INPUT",
    data: {
      placeholder: "Entre Employee Name",
      maxLength: 30,
      isRequired: true,
      badMessage: "please entre the correct name ",
    },
  },

  {
    field: "TEXT-INPUT",
    data: {
      placeholder: "Entre Your Designation",
      maxLength: 30,
      isRequired: true,
      badMessage: "Please entre the correct Designation",
    },
  },
  {
    field: "TEXT-INPUT",
    data: {
      placeholder: "Entre Site ",
      maxLength: 30,
      isRequired: true,
      badMessage: "Please entre the correct site name",
    },
  },
  {
    field: "TEXT-INPUT",
    data: {
      placeholder: "Entre your email",
      maxLength: 30,
      isRequired: true,
      badMessage: "entre the correct mail id  ",
    },
  },
  {
    field: "TEXT",
    data: {
      value: "YOUR PAN NO",
    },
  },

  {
    field: "TEXT-INPUT",
    data: {
      placeholder: "Entre your mobile number ",
      maxLength: 30,
      isRequired: true,
      badMessage: "entre the valid mobile number  ",
    },
  },
  {
    field: "TEXT-INPUT",
    data: {
      placeholder: "Entre your current address ",
      maxLength: 30,
      isRequired: true,
      badMessage: "entre the your current address ",
    },
  },
  {
    field: "CHECK-BOX",
    data: {
      isRequired: true,
      title: "I accept all terms and conditions ",
    },
  },
  {
    field: "BUTTON",
    data: {
      backgroundcolor: "#d8a28c",
      title: "submit",
    },
  },
  {
    field: "DATEPICKER",
    data: {
      title: "select date",
    },
  },
];

export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={rules}
          renderItem={({ item, index }) => {
            return (
              <View>
                {item.field == "TEXT-INPUT" ? (
                  <TextInput
                    placeholder={item.data.placeholder}
                    style={{
                      width: "90%",
                      height: 50,
                      borderRadius: 10,
                      borderWidth: 2,
                      alignSelf: "center",
                      paddingLeft: 20,
                      marginTop: 40,
                    }}
                  />
                ) : item.field == "TEXT" ? (
                  <View
                    style={{
                      width: "90%",
                      height: 50,
                      borderRadius: 10,
                      borderWidth: 2,
                      alignSelf: "center",
                      paddingLeft: 20,
                      justifyContent: "center",
                      marginTop: 40,
                    }}
                  >
                    <Text>{item.data.value}</Text>
                  </View>
                ) : item.field == "CHECK_BOX" ? (
                  <View
                    style={{
                      width: "90%",
                      height: "50",
                      flexDirection: "row",
                      alignSelf: "center",
                      alignItems: "center",
                    }}
                  >
                    <CheckBox
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                  </View>
                ) : item.field == "BUTTON" ? (
                  <TouchableOpacity
                    style={{
                      width: "90%",
                      height: 50,
                      borderRadius: 10,
                      backgroundColor: item.data.backgroundcolor,
                      alignSelf: "center",
                      marginTop: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>{item.data.title}</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
