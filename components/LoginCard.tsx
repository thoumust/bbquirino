// components/JudgeLoginCard.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function JudgeLoginCard() {
  return (
    <View className="bg-black/60 rounded-2xl p-6 w-[50%] max-w-md items-center mr-30 border border-white/10 shadow-lg shadow-white/5">
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")} // change to your crown logo
        className="w-20 h-20 mb-0"
        resizeMode="contain"
      />

      {/* Title */}
      <Text className="text-white text-3xl font-black mb-6">Judge Login</Text>

      {/* Username Label */}
      <Text className="text-white mb-1 mr-[18rem]">Username</Text>
      <View className="bg-white rounded-lg flex-row items-center px-1 mb-4 w-[90%]">
        <TextInput
          placeholder="username"
          placeholderTextColor="#999"
          className="flex-1 py-2"
        />
      </View>

      {/* Password Label */}
      <Text className="text-white mb-1 mr-[18rem]">Password</Text>
      <View className="bg-white rounded-lg flex-row items-center px-1 mb-4 w-[90%]">
        <TextInput
          placeholder="password"
          placeholderTextColor="#999"
          secureTextEntry
          className="flex-1 py-2"
        />
      </View>

      {/* Button */}
      <TouchableOpacity className="bg-purple-600 rounded-lg py-3 w-[90%] m-4">
        <Text className="text-center text-white font-bold">Log in</Text>
      </TouchableOpacity>
    </View>
  );
}
