import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" options={{ title: 'Login' }} />
      <Stack.Screen name="signUp" options={{ title: 'Sign Up' }} />
    </Stack>
  );
}