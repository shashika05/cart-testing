import React from "react";
import { View, Text, FlatList } from "react-native";
import tailwind from "tailwind-rn";

import SingleProduct from "./SingleProduct";

const Cart = ({ cartItems }) => {
  return (
    <View style={tailwind("flex-1 p-2")}>
      {cartItems[0] ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SingleProduct item={item} />}
        />
      ) : (
        <View style={tailwind("justify-center items-center h-5/6")}>
          <Text>No Cart Items found.</Text>
          <Text>Browse items and mark as 🛒</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
