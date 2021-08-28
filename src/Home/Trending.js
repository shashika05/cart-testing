import React from "react";
import { FlatList } from "react-native";
import tailwind from "tailwind-rn";

import dataArray from "../../dataArray";
import SingleProduct from "./SingleProduct";

const Trending = () => {
  return (
    <FlatList
      style={tailwind("h-72 mb-4")}
      horizontal
      data={dataArray.reverse()}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <SingleProduct item={item} />}
    />
  );
};

export default Trending;
