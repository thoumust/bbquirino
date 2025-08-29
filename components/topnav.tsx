
// // import { View, Text, Pressable } from 'react-native';
// // import React from 'react';
// // import { MaterialCommunityIcons } from "@expo/vector-icons";

// // const TopNav = ({ onLogout }) => (
// //   <View className="absolute top-0 left-0 w-full z-10 pt-2 pb-4 px-4 flex-row items-start justify-between">
// //     {/* left */}
// //     <View className="flex-1">
// //       <Text className="text-white font-bold text-base mb-0">Welcome, Judge #!</Text>
// //       <Text className="text-white text-xs mb-0">Binibining Quirino 2025 | Coronation Night</Text>
// //     </View>
// //     {/* right */}
// //     <View className="flex-row items-center gap-2">
// //       <Text className="text-white text-xs mr-2">{dateString}</Text>
// //       <Pressable
// //         onPress={onLogout}
// //         className="p-2 rounded-full active:bg-purple-500/20"
// //       >
// //         <MaterialCommunityIcons
// //           name="logout"
// //           size={22}
// //           color="#fff"
// //         />
// //       </Pressable>
// //     </View>
// //   </View>

// //   );

// // export default TopNav;

// import { View, Text, Pressable } from 'react-native';
// import React from 'react';
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// const TopNav = ({ onLogout }) => {
//   const today = new Date();
//   const dateString = today.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });

//   return (
//     <View className="absolute top-0 left-0 w-full z-10 pt-2 pb-4 px-4 flex-row items-start justify-between">
//       {/* left */}
//       <View className="flex-1">
//         <Text className="text-white font-bold text-base mb-0">Welcome, Judge #!</Text>
//         <Text className="text-white text-ss mb-0">Binibining Quirino 2025 | Coronation Night</Text>
//       </View>
//       {/* right */}
//       <View className="flex-row items-center gap-2">
//         <Text className="text-white text-s mr-2">{dateString}</Text>
//         <Pressable
//           onPress={onLogout}
//           className="p-2 rounded-full active:bg-purple-500/20"
//         >
//           <MaterialCommunityIcons
//             name="logout"
//             size={22}
//             color="#fff"
//           />
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default TopNav;

import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TopNav = () => {
  const router = useRouter();
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleLogout = () => {
    // Clear auth state here if you have any (e.g., AsyncStorage, context, etc.)
    router.replace("/"); // or "/login" if your login route is named "login"
  };

  return (
    <View className="absolute top-0 left-0 w-full z-10 pt-2 pb-4 px-4 flex-row items-start justify-between">
      {/* left */}
      <View className="flex-1">
        <Text className="text-white font-bold text-base mb-0">Welcome, Judge #!</Text>
        <Text className="text-white text-xs mb-0">Binibining Quirino 2025 | Coronation Night</Text>
      </View>
      {/* right */}
      <View className="flex-row items-center gap-2">
        <Text className="text-white text-xs mr-2">{dateString}</Text>
        <Pressable
          onPress={handleLogout}
          className="p-2 rounded-full active:bg-purple-500/20"
        >
          <MaterialCommunityIcons
            name="logout"
            size={22}
            color="#fff"
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TopNav;