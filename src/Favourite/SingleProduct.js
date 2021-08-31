import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

import { onProductPress, onFavRemove } from "../../Handler";

const SingleProduct = ({ item }) => {
  const [isfavEnabled, setIsfavEnabled] = useState(true);

  const deleteFavItem = (item) => {
    setIsfavEnabled(false);
    onFavRemove(item);
    console.log(`${item.name} - Item deleted`);
  };

  const cartHandle = (item) => {
    console.log(`${item.name} - Item added`);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => onProductPress(item)}
        style={tailwind("flex-row h-32 bg-gray-300 m-2 rounded-xl")}
      >
        <Image
          resizeMode="cover"
          style={tailwind("w-32 h-32 rounded-l-xl mr-2")}
          source={item.imageUrl}
        />
        <Text style={tailwind("text-center text-lg")}>{item.name}</Text>
        <Text style={tailwind("absolute right-12 bottom-2 text-right text-xs")}>
          by {item.seller}
        </Text>
        <Text
          style={tailwind(
            `${
              item.deal ? " line-through" : ""
            } absolute left-36 bottom-2 text-right text-sm`
          )}
        >
          $ {item.price}
        </Text>
        {item.deal ? (
          <Text
            style={tailwind(
              "absolute left-36 bottom-6 text-right text-sm text-red-600"
            )}
          >
            $ {Math.trunc(item.price * (1 - item.dealvalue))}
          </Text>
        ) : null}
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => deleteFavItem(item)}
          style={tailwind(
            "absolute bottom-4 right-4 w-8 h-8 bg-gray-200 rounded-xl items-center pt-1"
          )}
        >
          {isfavEnabled ? (
            <MaterialIcons name="favorite" size={24} color="red" />
          ) : (
            <MaterialIcons name="favorite-outline" size={24} color="red" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleProduct;
