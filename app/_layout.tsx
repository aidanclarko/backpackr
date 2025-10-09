import { Stack } from 'expo-router';

export const unstable_settings = {
  anchor: '(tabs)',
};


export default function RootLayout() {

  return (
  
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index" options={{ title: 'Welcome!'}}/>
        <Stack.Screen name="auth"/>

      </Stack>
      
  );
}
