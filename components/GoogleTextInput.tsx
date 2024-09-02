import { View, Text } from "react-native";
import React from "react";
import { GoogleInputProps } from "@/types/type";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View className={`flex-row items-center justify-center relative z-50 rounded-lg ${containerStyle} mb-5`}>
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
