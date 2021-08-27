import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

import dataArray from "../../dataArray";

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
          <View>
            <TouchableOpacity
              onPress={() => onProductPress(item)}
              style={tailwind("w-40 h-56 bg-gray-300 m-2 rounded-xl")}
            >
              <Image
                resizeMode="cover"
                style={tailwind("w-40 h-32 rounded-t-xl")}
                source={item.imageUrl}
              />
              <Text style={tailwind("text-center text-lg")}>{item.name}</Text>
              <Text
                style={tailwind(
                  "absolute left-1 bottom-1 text-right text-sm line-through"
                )}
              >
                $ {item.price}
              </Text>
              <Text
                style={tailwind(
                  "absolute left-1 bottom-5 text-right text-sm text-red-600"
                )}
              >
                $ {Math.trunc(item.price * (1 - item.dealvalue))}
              </Text>
              <Text
                style={tailwind("absolute right-1 bottom-1 text-right text-xs")}
              >
                by {item.seller}
              </Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => onFavouriteButtonPress(item)}
                style={tailwind(
                  "absolute -bottom-6 left-6 w-8 h-8 bg-gray-200 rounded-b-xl items-center pt-1"
                )}
              >
                <MaterialIcons name="favorite-outline" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onCartButtonPress(item)}
                style={tailwind(
                  "absolute -bottom-6 right-6 w-8 h-8 bg-gray-200 rounded-b-xl items-center pt-1"
                )}
              >
                <MaterialCommunityIcons
                  name="cart-outline"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null
      }
    />
  );
};

export default HotDeals;
