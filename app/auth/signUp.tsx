import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { IconButton } from 'react-native-paper';

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
        <IconButton
          size={25}
          style={styles.backArrow}
          icon="arrow-left"
          onPress={() => {
            router.push("/")
          }}
        />
        <Text style={styles.title}> Sign Up  </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
          placeholderTextColor={'#3B7A57'}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder='Password'
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
    backgroundColor: "#F9FAFB",
    justifyContent: "flex-start",
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    paddingTop: 150,
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
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    borderRadius: 10,
    height: 50,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  backArrow: {
    alignSelf: 'flex-start',

    paddingLeft: 10,
  }
});