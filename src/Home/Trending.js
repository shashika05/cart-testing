import React from "react";
import { FlatList } from "react-native";
import tailwind from "tailwind-rn";

import dataArray from "../../dataArray";
import SingleProduct from "./SingleProduct";

const Trending = ({
  onProductPress,
  onFavouriteButtonPress,
  onCartButtonPress,
}) => {
  return (
    <FlatList
      style={tailwind("h-72 mb-4")}
      horizontal
      data={dataArray.reverse()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <SingleProduct
          item={item}
          onProductPress={onProductPress}
          onFavouriteButtonPress={onFavouriteButtonPress}
          onCartButtonPress={onCartButtonPress}
        />
      )}
    />
  );
};

export default Trending;
