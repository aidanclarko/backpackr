import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Backpackr</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => router.push("/auth/signIn")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => router.push("/auth/signUp")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#F9FAFB",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#3B82F6",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    gap: 10,
    flexDirection: "row",
  },
});