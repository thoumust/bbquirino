import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="dashboard"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="judgesboard"
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="tallyboard"
      options={{
        headerShown: false,
      }}
    />
  </Stack>
}
