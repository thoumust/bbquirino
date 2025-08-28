import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function GlassTab() {
  const [active, setActive] = useState("dashboard"); // default active tab

  return (
    <View className="absolute bottom-10 self-center z-10">
      <BlurView
        intensity={50}
        tint="dark"
        className="flex-row items-center justify-between px-6 py-3 rounded-full w-36 border border-white/10"
      >
        {/* Dashboard Button */}
        <Pressable
          onPress={() => setActive("dashboard")}
          className="p-2 rounded-full hover:bg-purple-500/20"
        >
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={28}
            color={active === "dashboard" ? "#a855f7" : "#d1d5db"} // active = purple, inactive = gray
          />
        </Pressable>

        {/* Chart Button */}
        <Pressable
          onPress={() => setActive("chart")}
          className="p-2 rounded-full hover:bg-purple-500/20"
        >
          <MaterialCommunityIcons
            name="chart-pie"
            size={28}
            color={active === "chart" ? "#a855f7" : "#d1d5db"}
          />
        </Pressable>
      </BlurView>
    </View>
  );
}
