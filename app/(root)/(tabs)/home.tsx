import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Home;
