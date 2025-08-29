import { View, Text, ScrollView } from "react-native";
import React from "react";

type Contestant = {
  name: string;
  scores: Record<string, number>; // { Criteria1: 10, Criteria2: 15, ... }
};

type TallyTableProps = {
  criteriaList: string[];
  contestants: Contestant[];
};

const TallyTable: React.FC<TallyTableProps> = ({ criteriaList, contestants }) => {
  return (
    <ScrollView horizontal className="bg-white/10 rounded-2xl p-2">
      <View>
        {/* Header Row */}
        <View className="flex-row border-b border-gray-500 pb-2 mb-2">
          <Text className="w-32 text-white font-bold">Contestant</Text>
          {criteriaList.map((c, idx) => (
            <Text key={idx} className="w-24 text-white font-bold text-center">
              {c}
            </Text>
          ))}
          <Text className="w-24 text-white font-bold text-center">Total</Text>
        </View>

        {/* Rows */}
        {contestants.map((contestant, idx) => {
          const total = criteriaList.reduce(
            (sum, c) => sum + (contestant.scores[c] || 0),
            0
          );
          return (
            <View
              key={idx}
              className="flex-row border-b border-gray-700 py-2"
            >
              <Text className="w-32 text-white">{contestant.name}</Text>
              {criteriaList.map((c, i) => (
                <Text key={i} className="w-24 text-white text-center">
                  {contestant.scores[c] || 0}
                </Text>
              ))}
              <Text className="w-24 text-white text-center font-bold">{total}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TallyTable;
