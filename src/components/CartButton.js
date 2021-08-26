import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  const onCartPress = () => {
    navigation.navigate("Cart");
  };
  return (
    <TouchableOpacity onPress={onCartPress}>
      <Feather name="shopping-cart" size={23} color="black" />
    </TouchableOpacity>
  );
};

export default CartButton;
