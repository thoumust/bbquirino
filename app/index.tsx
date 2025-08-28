import { Image, View } from "react-native";
import React from "react";
import LoginCard from "../components/LoginCard";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require("../assets/images/cover.png")} resizeMode="cover" className="absolute z-0" />
      <LoginCard />
    </View>
  );
}
