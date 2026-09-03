import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Morning Schedule ☀️</Text>

      <Text style={styles.description}>
        Choose when you want her morning message to be sent.
      </Text>

      <View style={styles.timeCard}>
        <Text style={styles.time}>08:00 AM</Text>
        <Text style={styles.timeDescription}>
          Every morning
        </Text>
      </View>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Change Time
        </Text>
      </Pressable>
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
  },

  description: {
    fontSize: 16,
    color: "#777",
    marginTop: 10,
    marginBottom: 30,
  },

  timeCard: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },

  time: {
    fontSize: 40,
    fontWeight: "700",
  },

  timeDescription: {
    marginTop: 8,
    color: "#777",
  },

  button: {
    backgroundColor: "#ff5c8a",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});