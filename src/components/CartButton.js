import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  const onCartPress = () => {
    navigation.navigate("Cart");
  };
  return (
    <TouchableOpacity onPress={onCartPress}>
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default CartButton;
