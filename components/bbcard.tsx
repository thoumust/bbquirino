// import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
// import React, { useState } from "react";

// type CardProps = {
//   name: string;
//   image: any; // local image (require) or uri
//   maxScore: number;
//   onSave: (score: number) => void;
// };

// const ContestantCard: React.FC<CardProps> = ({ name, image, maxScore, onSave }) => {
//   const [score, setScore] = useState("");
//   const [isEditing, setIsEditing] = useState(false);

//   return (
//     <View className="bg-[#2b2b2b] backdrop-blur-3xl  rounded-md p-4 m-2 w-[275px] h-96 shadow-md">
//       <Image source={image} className="w-full h-32 rounded-xl items-center" resizeMode="cover" />
//         <Text className="text-white text-center font-semibold">{name}</Text>
//         <TextInput
//           className="bg-white/20 text-white rounded-xl px-2 mt-2"
//           placeholder={`Score (Max ${maxScore})`}
//           placeholderTextColor="#ccc"
//           keyboardType="numeric"
//           editable={isEditing}
//           value={score}
//           onChangeText={setScore}
//         />
//         <TouchableOpacity
//           className={`mt-2 py-2 rounded-xl ${isEditing ? "bg-green-500" : "bg-purple-500"}`}
//           onPress={() => {
//             if (isEditing && score) {
//               onSave(Number(score));
//             }
//             setIsEditing(!isEditing);
//           }}
//         >
//           <Text className="text-center text-white font-bold">
//             {isEditing ? "Save" : "Edit"}
//           </Text>
//         </TouchableOpacity>
//     </View>
//   );
// };

// export default ContestantCard;

import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

type CardProps = {
  name: string;
  image: any; // local image (require) or uri
  maxScore: number;
  onSave: (score: number) => void;
  totalScore?: number; // add this prop
  rank?: number;       // add this prop
};

const ContestantCard: React.FC<CardProps> = ({
  name,
  image,
  maxScore,
  onSave,
  totalScore,
  rank,
}) => {
  const [score, setScore] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View className="bg-[#2b2b2b] backdrop-blur-3xl rounded-md p-4 m-2 w-[275px] h-96 shadow-md">
      <Image source={image} className="w-full h-32 rounded-xl items-center" resizeMode="cover" />
      <Text className="text-white text-center font-semibold">{name}</Text>
      {/* Total Score and Rank */}
      <View className="flex-row justify-between items-center mt-2 mb-1">
        <Text className="text-white text-xs">
          Total: {totalScore !== undefined ? totalScore : "-"}
        </Text>
        <Text className="text-white text-xs">
          Rank: {rank !== undefined ? rank : "-"}
        </Text>
      </View>
      <TextInput
        className="bg-white/20 text-white rounded-xl px-2 mt-2"
        placeholder={`Score (Max ${maxScore})`}
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        editable={isEditing}
        value={score}
        onChangeText={setScore}
      />
      <TouchableOpacity
        className={`mt-2 py-2 rounded-xl ${isEditing ? "bg-green-500" : "bg-purple-500"}`}
        onPress={() => {
          if (isEditing && score) {
            onSave(Number(score));
          }
          setIsEditing(!isEditing);
        }}
      >
        <Text className="text-center text-white font-bold">
          {isEditing ? "Save" : "Edit"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContestantCard;