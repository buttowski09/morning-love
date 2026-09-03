import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";

export default function SettingsScreen() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const [aiMessages, setAiMessages] = useState(true);
  const [automaticSending, setAutomaticSending] = useState(false);

  const [messageStyle, setMessageStyle] = useState("Romantic");

  const messageStyles = [
    "🥰 Cute",
    "❤️ Romantic",
    "😂 Funny",
    "😘 Flirty",
    "🌸 Sweet",
  ];

  

function saveSettings() {
  if (Platform.OS === "web") {
    window.alert("Your Morning Love settings have been saved.");
  } else {
    Alert.alert("Settings Saved ❤️", "Your Morning Love settings have been saved.");
  }
}

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.emoji}>⚙️</Text>

      <Text style={styles.title}>Settings</Text>

      <Text style={styles.subtitle}>
        Personalise how Morning Love works.
      </Text>

      {/* Recipient Section */}

      <Text style={styles.sectionTitle}>
        💕 Her Details
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>Her name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter her name"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Nickname</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Baby, Love..."
          placeholderTextColor="#aaa"
          value={nickname}
          onChangeText={setNickname}
        />
      </View>

      {/* Schedule */}

      <Text style={styles.sectionTitle}>
        ☀️ Morning Schedule
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>
              Morning time
            </Text>

            <Text style={styles.rowDescription}>
              When the morning message should be sent
            </Text>
          </View>

          <Text style={styles.time}>
            08:00
          </Text>
        </View>
      </View>

      {/* Message Style */}

      <Text style={styles.sectionTitle}>
        💌 Message Style
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Choose the personality
        </Text>

        <View style={styles.styleContainer}>
          {messageStyles.map((style) => {
            const styleName = style.replace(
              /^[^\w]+/,
              ""
            );

            const selected =
              messageStyle === styleName;

            return (
              <Pressable
                key={style}
                style={[
                  styles.styleOption,
                  selected && styles.selectedOption,
                ]}
                onPress={() =>
                  setMessageStyle(styleName)
                }
              >
                <Text
                  style={[
                    styles.styleText,
                    selected && styles.selectedText,
                  ]}
                >
                  {style}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* AI */}

      <Text style={styles.sectionTitle}>
        🤖 AI Settings
      </Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <View style={styles.rowContent}>
            <Text style={styles.rowTitle}>
              AI Messages
            </Text>

            <Text style={styles.rowDescription}>
              Let AI create personalised messages.
            </Text>
          </View>

          <Switch
            value={aiMessages}
            onValueChange={setAiMessages}
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={styles.rowContent}>
            <Text style={styles.rowTitle}>
              Automatic Sending
            </Text>

            <Text style={styles.rowDescription}>
              Automatically send the generated message.
            </Text>
          </View>

          <Switch
            value={automaticSending}
            onValueChange={setAutomaticSending}
          />
        </View>
      </View>

      {/* Save */}

      <Pressable
        style={styles.button}
        onPress={saveSettings}
      >
        <Text style={styles.buttonText}>
          Save Settings
        </Text>
      </Pressable>

      {/* App Information */}

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          ❤️ Morning Love
        </Text>

        <Text style={styles.footerText}>
          Make every morning a little more special.
        </Text>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>
      </View>
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
    fontSize: 45,
    textAlign: "center",
    marginTop: 45,
    marginBottom: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    color: "#222",
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 30,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 12,
    marginTop: 10,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 18,
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "#f8f8f8",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rowContent: {
    flex: 1,
    paddingRight: 15,
  },

  rowTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  rowDescription: {
    fontSize: 13,
    color: "#888",
    marginTop: 4,
    lineHeight: 18,
  },

  time: {
    fontSize: 20,
    fontWeight: "700",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 18,
  },

  styleContainer: {
    gap: 10,
  },

  styleOption: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
  },

  selectedOption: {
    backgroundColor: "#ffe0ea",
  },

  styleText: {
    fontSize: 15,
    color: "#444",
  },

  selectedText: {
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#ff5c8a",
    padding: 17,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  footer: {
    alignItems: "center",
    marginTop: 35,
  },

  footerTitle: {
    fontSize: 18,
    fontWeight: "700",
  },

  footerText: {
    color: "#888",
    marginTop: 5,
  },

  version: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 12,
  },
});