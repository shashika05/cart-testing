import React from "react";
import { Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

import HotDeals from "./HotDeals";
import Trending from "./Trending";
import greet from "../../greet";

export default function Home({
  onProductPress,
  onFavouriteButtonPress,
  onCartButtonPress,
}) {
  return (
    <ScrollView style={tailwind("flex-1 pt-4 pl-2")}>
      <Text style={tailwind("text-left text-3xl font-bold")}>{greet()}</Text>
      <Text style={tailwind("text-left text-2xl font-medium mt-4")}>
        Hot Deals
      </Text>
      <HotDeals
        onProductPress={onProductPress}
        onFavouriteButtonPress={onFavouriteButtonPress}
        onCartButtonPress={onCartButtonPress}
      />
      <Text style={tailwind("text-left text-2xl font-medium")}>Trending</Text>
      <Trending
        onProductPress={onProductPress}
        onFavouriteButtonPress={onFavouriteButtonPress}
        onCartButtonPress={onCartButtonPress}
      />
    </ScrollView>
  );
}
