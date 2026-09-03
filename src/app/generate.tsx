import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { useState } from "react";

export default function GenerateScreen() {
  const [message, setMessage] = useState("");

  function generateMessage() {
    setMessage(
      "Good morning my love ❤️ I hope you have the most beautiful day. Don't forget that someone is thinking about you the moment they wake up 🥰"
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Message ❤️</Text>

      <Text style={styles.label}>Her name</Text>

      <TextInput
        placeholder="Enter her name"
        style={styles.input}
      />

      <Text style={styles.label}>Message style</Text>

      <View style={styles.options}>
        <Text style={styles.option}>🥰 Cute</Text>
        <Text style={styles.option}>❤️ Romantic</Text>
        <Text style={styles.option}>😂 Funny</Text>
        <Text style={styles.option}>😘 Flirty</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={generateMessage}
      >
        <Text style={styles.buttonText}>
          Generate
        </Text>
      </Pressable>

      {message !== "" && (
        <View style={styles.result}>
          <Text style={styles.resultText}>{message}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff7fa",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 60,
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 25,
  },

  options: {
    gap: 10,
    marginBottom: 25,
  },

  option: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#ff5c8a",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  result: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginTop: 25,
  },

  resultText: {
    fontSize: 16,
    lineHeight: 25,
  },
});