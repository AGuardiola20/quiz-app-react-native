import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loader, setLoader]= useState(true);
  const [page, setPage] = useState(0);

  const navigation = useNavigation();

  const handleNextQuestion = () =>{
    if(page>=9){
      navigation.navigate("Result");
    }else{
        setPage(page + 1);
    }
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setLoader(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      {questions.length > 0 && !loader ? (
        <SafeAreaView>
          <View>
            <Text style={styles.title}>Q. #{(page+1)}({questions[page].category})</Text>
            <Text style={styles.question}>
              {questions[page].question}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleNextQuestion} style={styles.button}>
              <Text style={styles.buttonText}>{questions[page].correct_answer}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextQuestion} style={styles.button}>
              <Text style={styles.buttonText}>{questions[page].incorrect_answers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextQuestion} style={styles.button}>
              <Text style={styles.buttonText}>{questions[page].incorrect_answers[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextQuestion} style={styles.button}>
              <Text style={styles.buttonText}>{questions[page].incorrect_answers[2]}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : null} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: "100%",
    backgroundColor: "#3D3D3D",
    justifyContent: "space-between",
  },
  title: {
    color: "#FFF",
    fontSize: 40,
    fontWeight: "bold",
  },
  question: {
    color: "#FFF",
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#3083DC",
    width: 360,
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
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
});
