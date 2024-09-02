import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Tabslayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="history" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default Tabslayout;
