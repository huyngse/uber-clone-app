import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Platform, View, Text } from 'react-native';
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="dark" />
    </View>
  );
}