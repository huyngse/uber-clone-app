import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default SignIn;
