import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/quiz.png")} style={styles.img} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          navigation.navigate("Quiz")
        }}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#3D3D3D"
  },
  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 300,
    width: 300,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
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
