import React from "react";
import { FlatList } from "react-native";
import tailwind from "tailwind-rn";

import dataArray from "../../dataArray";
import SingleProduct from "./SingleProduct";

const HotDeals = ({
  onProductPress,
  onFavouriteButtonPress,
  onCartButtonPress,
}) => {
  return (
    <FlatList
      style={tailwind("h-72")}
      horizontal
      data={dataArray}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>
        item.deal ? (
          <SingleProduct
            item={item}
            onProductPress={onProductPress}
            onFavouriteButtonPress={onFavouriteButtonPress}
            onCartButtonPress={onCartButtonPress}
          />
        ) : null
      }
    />
  );
};

export default HotDeals;
