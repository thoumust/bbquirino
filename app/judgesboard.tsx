// import { View, Text, ScrollView, Image } from "react-native";
// import React, { useState } from "react";
// import SideMenu from "../components/sidemenu";
// import Bbcard from "../components/bbcard";
// import TopNav from "../components/topnav";
// import Pill from "../components/pill";

// const Judgesboard = () => {
//   const [selectedCriteria, setSelectedCriteria] = useState("Criteria 1");

//   const criteriaList = [
//     "Criteria 1",
//     "Criteria 2",
//     "Criteria 3",
//     "Criteria 4",
//     "Criteria 5",
//   ];

//   // Example: Different contestants per criteria
//   const contestantsData: Record<string, any[]> = {
//     "Criteria 1": [
//       { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
//       { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 10 },
//       { name: "Leonora", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
//       { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 10 },
//       { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 10 },
//       { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 10 },
//     ],
//     "Criteria 2": [
//     { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 20 },
//       { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 20 },
//       { name: "Leonora", image: require("../assets/images/nagtipunan.png"), maxScore: 20 },
//       { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 20 },
//       { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 20 },
//       { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 20 },
//     ],
//     "Criteria 3": [
//       { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
//       { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 10 },
//       { name: "Leonora", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
//       { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 10 },
//       { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 10 },
//       { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 10 },  
//     ],
//     "Criteria 4": [
//     { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 20 },
//       { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 20 },
//       { name: "Leonora", image: require("../assets/images/nagtipunan.png"), maxScore: 20 },
//       { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 20 },
//       { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 20 },
//       { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 20 },
//     ],
//     "Criteria 5": [
//       { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
//       { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 10 },
//       { name: "Leonora", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
//       { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 10 },
//       { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 10 },
//       { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 10 },  
//     ],
//   };

//     // Add this above your return statement
//     const dropdowns = {
//     "Criteria 2": ["Subcriteria 2.1", "Subcriteria 2.2"],
//     "Criteria 4": ["Subcriteria 4.1"],
//     // Only these criteria will have dropdowns
//     };

//   return (
//     <View className="flex-1">
//         <Image source={require("../assets/images/cover.png")} resizeMode="cover" className="absolute z-0" />
//         <TopNav/>
//         <Pill/>
    
//     <View className="flex-row flex-1 px-2 mt-20">
//         <View className="w-[20%]">

//             <SideMenu
//             criteriaList={["Criteria 1", "Criteria 2", "Criteria 3"]}
//             selected={selectedCriteria}
//             onSelect={setSelectedCriteria}
//             dropdowns={{
//                 "Criteria 2": ["Dropdown Item 1", "Dropdown Item 2"],
//                 // Only Criteria 2 has a dropdown
//             }}
//             />
//             {/* Side Menu
//             <SideMenu
//                 criteriaList={criteriaList}
//                 selected={selectedCriteria}
//                 onSelect={setSelectedCriteria}
//             /> */}
//         </View>

//       {/* Main Content */}
//       <ScrollView className="flex-1 p-4">
//         <Text className="text-white text-2xl font-bold mb-4">
//           {selectedCriteria}
//         </Text>
//         <View className="flex-row flex-wrap justify-center">
//           {contestantsData[selectedCriteria]?.map((c, idx) => (
//             <Bbcard
//               key={idx}
//               name={c.name}
//               image={c.image}
//               maxScore={c.maxScore}
//               onSave={(score) =>
//                 console.log(`${c.name} scored ${score} in ${selectedCriteria}`)
//               }
//             />
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//     </View>
//   );
// };

// export default Judgesboard;

import { View, Text, ScrollView, Image } from "react-native";
import React, { useState }from "react";
import SideMenu from "../components/sidemenu";
import Bbcard from "../components/bbcard";
import TopNav from "../components/topnav";
import Pill from "../components/pill";

const Judgesboard = () => {
  const [selectedCriteria, setSelectedCriteria] = useState("Criteria 1");

  const criteriaList = [
    "Criteria 1",
    "Criteria 2",
    "Criteria 3",
    "Criteria 4",
    "Criteria 5",
  ];

  // Example: Different contestants per criteria
  const contestantsData: Record<string, any[]> = {
    "Criteria 1": [
      { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
      { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 10 },
      { name: "Leonora", image: require("../assets/images/saguday.png"), maxScore: 10 },
      { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 10 },
      { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 10 },
      { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 10 },
    ],
    "Criteria 2": [
      { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 20 },
      { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 20 },
      { name: "Leonora", image: require("../assets/images/saguday.png"), maxScore: 20 },
      { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 20 },
      { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 20 },
      { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 20 },
    ],
    "Criteria 3": [
      { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
      { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 10 },
      { name: "Leonora", image: require("../assets/images/saguday.png"), maxScore: 10 },
      { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 10 },
      { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 10 },
      { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 10 },
    ],
    "Criteria 4": [
      { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 20 },
      { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 20 },
      { name: "Leonora", image: require("../assets/images/saguday.png"), maxScore: 20 },
      { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 20 },
      { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 20 },
      { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 20 },
    ],
    "Criteria 5": [
      { name: "Maria", image: require("../assets/images/nagtipunan.png"), maxScore: 10 },
      { name: "Ana", image: require("../assets/images/cab.png"), maxScore: 10 },
      { name: "Leonora", image: require("../assets/images/saguday.png"), maxScore: 10 },
      { name: "Clara", image: require("../assets/images/maddela.png"), maxScore: 10 },
      { name: "Pasing", image: require("../assets/images/aglipay.png"), maxScore: 10 },
      { name: "Urang", image: require("../assets/images/diffun.png"), maxScore: 10 },
    ],
  };

  // Dropdowns for criteria
  const dropdowns = {
    "Criteria 2": ["Subcriteria 2.1", "Subcriteria 2.2"],
    "Criteria 4": ["Subcriteria 4.1"],
    // Only these criteria will have dropdowns
  };

  return (
    <View className="flex-1">
      <Image source={require("../assets/images/cover.png")} resizeMode="cover" className="absolute z-0" />
      <TopNav />
      <Pill />

      <View className="flex-row flex-1 px-2 justify-cent mt-12">
        <View className="w-[28%]">
          <SideMenu
            criteriaList={criteriaList}
            selected={selectedCriteria}
            onSelect={setSelectedCriteria}
            dropdowns={dropdowns}
          />
        </View>

        {/* Main Content */}
        <ScrollView className="flex-1 p-4 top-0">
          <Text className="text-white text-2xl font-bold mb-4">
            {selectedCriteria}
          </Text>
          <View className="flex-row flex-wrap justify-center top-0">
            {contestantsData[selectedCriteria]?.slice(0, 6).map((c, idx) => (
                <View key={idx} className="w-1/3 p-2">
                <Bbcard
                    name={c.name}
                    image={c.image}
                    maxScore={c.maxScore}
                    onSave={(score) =>
                    console.log(`${c.name} scored ${score} in ${selectedCriteria}`)
                    }
                />
            </View>
            ))}
</View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Judgesboard;
