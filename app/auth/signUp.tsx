import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <Text style={styles.title}> Sign Up  </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Enter Email'
          placeholderTextColor={'#3B7A57'}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Enter Password'
          placeholderTextColor={'#3B7A57'}
        />
        <Pressable 
          style={styles.button}
          >
            <Text style={styles.buttonText}> Sign Up</Text>
          </Pressable>
    </View>
  )
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});