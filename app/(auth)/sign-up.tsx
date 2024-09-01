import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSignUpPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => {
              setForm((prev) => ({ ...prev, name: value }));
            }}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => {
              setForm((prev) => ({ ...prev, email: value }));
            }}
          />
          <InputField
            label="Password"
            placeholder="Enter your name"
            icon={icons.lock}
            value={form.password}
            secureTextEntry
            onChangeText={(value) => {
              setForm((prev) => ({ ...prev, password: value }));
            }}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />
          <Link href='/sign-in' className="text-center text-general-200 mt-10">
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Log In</Text>
          </Link>
        </View>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
};

export default SignUp;
