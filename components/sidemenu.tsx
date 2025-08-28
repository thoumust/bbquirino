// import { Text, TouchableOpacity, ScrollView } from "react-native";
// import React from "react";

// type SideMenuProps = {
//   criteriaList: string[];
//   selected: string;
//   onSelect: (criteria: string) => void;
// };

// const SideMenu: React.FC<SideMenuProps> = ({ criteriaList, selected, onSelect }) => {
//   return (
//     <ScrollView className="bg-black/40 py-4">
//       {criteriaList.map((criteria, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => onSelect(criteria)}
//           className={`p-2 rounded-xl mb-2 ${
//             selected === criteria ? "bg-purple-600" : "bg-transparent"
//           }`}
//         >
//           <Text className="text-white text-sm">{criteria}</Text>
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// };

// export default SideMenu;

import { Text, TouchableOpacity, ScrollView, View } from "react-native";
import React, { useState } from "react";

type DropdownMap = {
  [criteria: string]: string[];
};

type SideMenuProps = {
  criteriaList: string[];
  selected: string;
  onSelect: (criteria: string) => void;
  dropdowns?: DropdownMap;
};

const SideMenu: React.FC<SideMenuProps> = ({
  criteriaList,
  selected,
  onSelect,
  dropdowns = {},
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState<{ criteria: string; item: string } | null>(null);

  return (
    <ScrollView className="bg-black/40 py-4">
      {criteriaList.map((criteria, index) => {
        const hasDropdown = dropdowns[criteria]?.length > 0;
        const isDropdownOpen = openDropdown === criteria;
        const isHighlighted =
          selected === criteria ||
          (isDropdownOpen && hasDropdown) ||
          (selectedSubmenu && selectedSubmenu.criteria === criteria);

        return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                if (hasDropdown) {
                  setOpenDropdown(isDropdownOpen ? null : criteria);
                  onSelect(criteria);
                } else {
                  setOpenDropdown(null);
                  onSelect(criteria);
                  setSelectedSubmenu(null);
                }
              }}
              className={`p-2 rounded-xl mb-2 ${
                isHighlighted ? "bg-purple-600" : "bg-transparent"
              }`}
            >
              <Text className="text-white text-sm">{criteria}</Text>
            </TouchableOpacity>
            {hasDropdown && isDropdownOpen && (
              <View className="ml-2 mb-2 bg-black/60 rounded">
                {dropdowns[criteria].map((item, idx) => {
                  const isSubmenuSelected =
                    selectedSubmenu &&
                    selectedSubmenu.criteria === criteria &&
                    selectedSubmenu.item === item;
                  return (
                    <TouchableOpacity
                      key={idx}
                      className={`p-2 rounded ${isSubmenuSelected ? "bg-purple-400" : ""}`}
                      onPress={() => {
                        setSelectedSubmenu({ criteria, item });
                        onSelect(criteria); // or pass item if needed
                      }}
                    >
                      <Text className="text-white text-xs">{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SideMenu;