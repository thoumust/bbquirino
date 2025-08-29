import { View, Text, Image } from "react-native";
import React from "react";
import TallyTable from "../components/tallyt";
import TopNav from "../components/topnav";
import Pill from "../components/pill";

const TallyBoard = () => {
  const criteriaList = ["Criteria 1", "Criteria 2", "Criteria 3"];

  const contestants = [
    {
      name: "Maria",
      scores: { "Criteria 1": 10, "Criteria 2": 15, "Criteria 3": 20 },
    },
    {
      name: "Ana",
      scores: { "Criteria 1": 9, "Criteria 2": 12, "Criteria 3": 18 },
    },
    {
      name: "Clara",
      scores: { "Criteria 1": 8, "Criteria 2": 14, "Criteria 3": 16 },
    },
  ];

  return (
    <View className="flex-1 items-center justify-center">
      <Image source={require("../assets/images/cover.png")} resizeMode="cover" className="absolute z-0" />
      <TopNav />
      <Pill />
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-white m-2">
          Tally Sheets: Coronation Night
        </Text>
      </View>
      <TallyTable criteriaList={criteriaList} contestants={contestants} />
    </View>
  );
};

export default TallyBoard;