import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

const ClearCartButton = () => {
  // const navigation = useNavigation();
  const onClearCartPress = () => {
    console.log(`Clear cart pressed`);
  };
  return (
    <TouchableOpacity onPress={onClearCartPress}>
      <MaterialCommunityIcons name="cart-remove" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default ClearCartButton;
