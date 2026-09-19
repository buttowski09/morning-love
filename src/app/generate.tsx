import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const API_URL = "http://10.106.103.170:8000";

export default function GenerateScreen() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateMessage() {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${API_URL}/messages/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to generate message");
      }

      setMessage(data.message);
    } catch (error) {
      console.error("Generate message error:", error);

      Alert.alert(
        "Something went wrong",
        error instanceof Error
          ? error.message
          : "Could not generate the message."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.emoji}>💌</Text>

      <Text style={styles.title}>Create a Message ❤️</Text>

      <Text style={styles.subtitle}>
        Let AI create a personalised good-morning message using
        your memories together.
      </Text>

      <Pressable
        onPress={generateMessage}
        disabled={loading}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
          loading && styles.buttonDisabled,
        ]}
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator color="white" />
            <Text style={styles.buttonText}>
              Creating your message...
            </Text>
          </View>
        ) : (
          <Text style={styles.buttonText}>
            ✨ Generate Good Morning Message
          </Text>
        )}
      </Pressable>

      {message !== "" && (
        <View style={styles.messageCard}>
          <Text style={styles.cardTitle}>Your message 💕</Text>

          <Text style={styles.messageText}>
            {message}
          </Text>

          <Pressable
            onPress={generateMessage}
            disabled={loading}
            style={styles.regenerateButton}
          >
            <Text style={styles.regenerateText}>
              🔄 Generate Another
            </Text>
          </Pressable>
        </View>
      )}

      {message === "" && !loading && (
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            💡 How it works
          </Text>

          <Text style={styles.infoText}>
            Your saved memories are sent securely to the backend,
            where Gemini creates a personalised message based on
            the details you've provided.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7fa",
  },

  content: {
    padding: 24,
    paddingBottom: 50,
  },

  emoji: {
    fontSize: 50,
    textAlign: "center",
    marginTop: 45,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#ff5c8a",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
  },

  buttonPressed: {
    opacity: 0.8,
  },

  buttonDisabled: {
    opacity: 0.7,
  },

  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  messageCard: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 22,
    marginTop: 30,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 15,
  },

  messageText: {
    fontSize: 18,
    lineHeight: 29,
    color: "#333",
  },

  regenerateButton: {
    marginTop: 22,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#ffe5ee",
    alignItems: "center",
  },

  regenerateText: {
    color: "#ff5c8a",
    fontSize: 15,
    fontWeight: "700",
  },

  infoCard: {
    backgroundColor: "#ffe5ee",
    padding: 18,
    borderRadius: 15,
    marginTop: 30,
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
  },

  infoText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 21,
  },
});