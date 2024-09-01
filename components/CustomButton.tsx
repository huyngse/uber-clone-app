import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React, { ReactNode } from "react";
import { ButtonProps } from "@/types/type";
const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-[#0286ff]";
  }
};
const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};
const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <View
      className={`overflow-hidden rounded-full ${className} shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)}`}
      {...props}
    >
      <Pressable
        android_ripple={{ color: "white" }}
        onPress={onPress}
        className={`w-full p-3 flex-row justify-center items-center`}
      >
        {IconLeft && <IconLeft />}
        <Text
          className={`font-bold ${getTextVariantStyle(textVariant)}`}
        >
          {title}
        </Text>
        {IconRight && <IconRight />}
      </Pressable>
    </View>
  );
};

export default CustomButton;
