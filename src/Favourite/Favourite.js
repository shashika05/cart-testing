import React from "react";
import { View, Text, FlatList } from "react-native";
import tailwind from "tailwind-rn";

import SingleProduct from "./SingleProduct";

const Favourite = ({ favourites }) => {
  return (
    <View style={tailwind("flex-1 p-2")}>
      {favourites[0] ? (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SingleProduct item={item} />}
        />
      ) : (
        <View style={tailwind("justify-center items-center h-5/6")}>
          <Text>No favourites found.</Text>
          <Text>Browse items and mark as ❤</Text>
        </View>
      )}
    </View>
  );
};

export default Favourite;
