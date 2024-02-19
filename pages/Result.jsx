import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Result() {

    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Congrats!</Text>
      </View>
      <View>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Home");
        }} style={styles.button}>
          <Text style={styles.buttonText}>Main menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: "100%",
    backgroundColor: "#3D3D3D",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text:{
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#D81E5B",
    width: 300,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: "#F5F1ED",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
