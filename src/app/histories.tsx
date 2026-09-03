import { StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message History ❤️</Text>

      <View style={styles.message}>
        <Text style={styles.date}>August 28</Text>

        <Text style={styles.text}>
          Good morning beautiful ❤️
          {"\n\n"}
          Hope you have an amazing day!
        </Text>
      </View>

      <View style={styles.message}>
        <Text style={styles.date}>August 27</Text>

        <Text style={styles.text}>
          Wake up sleepyhead 😂❤️
        </Text>
      </View>
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
    marginBottom: 25,
  },

  message: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },

  date: {
    fontWeight: "700",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});