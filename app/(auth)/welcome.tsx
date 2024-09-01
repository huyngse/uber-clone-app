import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const OnBoarding = () => {
  return (
    <SafeAreaView>
      <Text>OnBoarding</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default OnBoarding;
