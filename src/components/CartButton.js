import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const CartButton = () => {
  const onCartPress = () => {
    console.log(`Cart button Pressed`);
  };
  return (
    <TouchableOpacity onPress={onCartPress}>
      <Feather name="shopping-cart" size={23} color="black" />
    </TouchableOpacity>
  );
};

export default CartButton;
