import { Pressable, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
          
      <Text style={styles.heart}>❤️</Text>

      <Text style={styles.title}>Morning Love</Text>

      <Text style={styles.subtitle}>
        Make her morning a little more special.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tomorrow's Message</Text>

        <Text style={styles.message}>
          Good morning beautiful ❤️{"\n\n"}
          I hope you slept well. Just wanted to remind you
          that you're the first person I think about when I wake up.
          {"\n\n"}
          Have an amazing day, baby 🥰
        </Text>
      </View>

      
    <Pressable
      style={styles.button}
      onPress={() => router.push("/generate")}>
     <Text style={styles.buttonText}>
      Generate Message
      </Text>
    </Pressable>

      <Pressable style={styles.secondaryButton}
        onPress={() => router.push("/histories")}>
        <Text style={styles.secondaryButtonText}>
          Message History
        </Text>
      </Pressable>



      <Pressable style={styles.secondaryButton}
        onPress={() => router.push("/schedule")}>
        <Text style={styles.secondaryButtonText}>
          Message Schedule
        </Text>
      </Pressable>

      <Pressable style={styles.secondaryButton}
        onPress={() => router.push("/memories")}>
        <Text style={styles.secondaryButtonText}>
           Memories 
        </Text>
      </Pressable>

      <Pressable style={styles.secondaryButton}
        onPress={() => router.push("/settings")}>
        <Text style={styles.secondaryButtonText}>
          settings
        </Text>
      </Pressable>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff7fa",
  },

  heart: {
    fontSize: 55,
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
    marginTop: 8,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "white",
    padding: 22,
    borderRadius: 20,
    marginBottom: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },

  message: {
    fontSize: 16,
    lineHeight: 25,
    color: "#444",
  },

  button: {
    backgroundColor: "#ff5c8a",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: "white",
  },

  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});