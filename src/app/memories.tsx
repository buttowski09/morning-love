import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function MemoriesScreen() {
  const [nickname, setNickname] = useState("");
  const [favouriteFood, setFavouriteFood] = useState("");
  const [favouriteDrink, setFavouriteDrink] = useState("");
  const [favouriteFlower, setFavouriteFlower] = useState("");
  const [thingsSheLoves, setThingsSheLoves] = useState("");
  const [insideJokes, setInsideJokes] = useState("");
  const [specialMemories, setSpecialMemories] = useState("");

  async function saveMemories() {
  try {
    const response = await fetch(
      "http://10.106.103.187:8000/memories/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname,
          favourite_food: favouriteFood,
          favourite_drink: favouriteDrink,
          favourite_flower: favouriteFlower,
          things_she_loves: thingsSheLoves,
          inside_jokes: insideJokes,
          special_memories: specialMemories,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save memories");
    }

    const data = await response.json();

    Alert.alert(
      "Saved ❤️",
      "Her memories have been saved successfully!"
    );

    console.log(data);
  } catch (error) {
    console.error(error);

    Alert.alert(
      "Error",
      "Could not save the memories."
    );
  }
}
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.emoji}>🧠</Text>

      <Text style={styles.title}>Things About Her ❤️</Text>

      <Text style={styles.subtitle}>
        Add little details that will help create more personal
        and meaningful messages.
      </Text>

      <Text style={styles.label}>Her nickname</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Baby, Love, Princess..."
        placeholderTextColor="#aaa"
        value={nickname}
        onChangeText={setNickname}
      />

      <Text style={styles.label}>Favourite food</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Pizza, pasta..."
        placeholderTextColor="#aaa"
        value={favouriteFood}
        onChangeText={setFavouriteFood}
      />

      <Text style={styles.label}>Favourite drink</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Coffee, bubble tea..."
        placeholderTextColor="#aaa"
        value={favouriteDrink}
        onChangeText={setFavouriteDrink}
      />

      <Text style={styles.label}>Favourite flower</Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Lily, rose..."
        placeholderTextColor="#aaa"
        value={favouriteFlower}
        onChangeText={setFavouriteFlower}
      />

      <Text style={styles.label}>Things she loves</Text>

      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Things she enjoys, hobbies, places she likes..."
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={4}
        value={thingsSheLoves}
        onChangeText={setThingsSheLoves}
      />

      <Text style={styles.label}>Inside jokes 😂</Text>

      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Funny things only the two of you understand..."
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={4}
        value={insideJokes}
        onChangeText={setInsideJokes}
      />

      <Text style={styles.label}>Special memories ❤️</Text>

      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="First date, first trip, favourite memories together..."
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={5}
        value={specialMemories}
        onChangeText={setSpecialMemories}
      />

      <Pressable
  onPress={saveMemories}
  style={styles.button}
>
  <Text style={styles.buttonText}>
    save memories 
  </Text>
</Pressable>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          ✨ Why add memories?
        </Text>

        <Text style={styles.infoText}>
          These details can later be given to the AI so it can
          create messages that feel personal instead of generic.
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

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
  },

  multiline: {
    minHeight: 100,
    textAlignVertical: "top",
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

  infoCard: {
    backgroundColor: "#ffe5ee",
    padding: 18,
    borderRadius: 15,
    marginTop: 25,
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