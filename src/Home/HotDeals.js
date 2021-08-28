import React from "react";
import { FlatList } from "react-native";
import tailwind from "tailwind-rn";

import dataArray from "../../dataArray";
import SingleProduct from "./SingleProduct";

const HotDeals = () => {
  return (
    <FlatList
      style={tailwind("h-72")}
      horizontal
      data={dataArray}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>
        item.deal ? <SingleProduct item={item} /> : null
      }
    />
  );
};

export default HotDeals;
