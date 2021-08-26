import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const Product = () => {
  return (
    <View style={tailwind("justify-center items-center flex-1")}>
      <Text>Product Page</Text>
    </View>
  );
};

export default Product;
