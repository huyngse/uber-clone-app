import { View, Text, TouchableHighlight, Pressable, Image } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const OnBoarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="h-full items-center justify-between bg-white">
      <View className="w-full justify-end items-end">
        <Pressable
          android_ripple={{ color: "aqua", borderless: true }}
          onPress={() => {
            router.push("/(auth)/sign-up");
          }}
          className="p-5"
        >
          <Text className="text-black text-md font-JakartaBold">Skip</Text>
        </Pressable>
      </View>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-8 h-1 mx-1 bg-[#E2E8F0] rounded-full" />}
        activeDot={<View className="w-8 h-1 mx-1 bg-[#0286FF] rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10 mb-2"
        onPress={() => isLastSlide ? router.push('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default OnBoarding;
