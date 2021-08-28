import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

const SingleProduct = ({
  item,
  onProductPress,
  onFavouriteButtonPress,
  onCartButtonPress,
}) => {
  const [isfavEnabled, setFavEnabled] = useState(false);

  const favHandle = (item) => {
    setFavEnabled(() => !isfavEnabled);
    onFavouriteButtonPress(item);
  };

  return (
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
            `${
              item.deal ? " line-through" : ""
            } absolute left-1 bottom-1 text-right text-sm`
          )}
        >
          $ {item.price}
        </Text>
        {item.deal ? (
          <Text
            style={tailwind(
              "absolute left-1 bottom-5 text-right text-sm text-red-600"
            )}
          >
            $ {Math.trunc(item.price * (1 - item.dealvalue))}
          </Text>
        ) : null}
        <Text style={tailwind("absolute right-1 bottom-1 text-right text-xs")}>
          by {item.seller}
        </Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => favHandle(item)}
          style={tailwind(
            "absolute -bottom-6 left-6 w-8 h-8 bg-gray-200 rounded-b-xl items-center pt-1"
          )}
        >
          {isfavEnabled ? (
            <MaterialIcons name="favorite" size={24} color="red" />
          ) : (
            <MaterialIcons name="favorite-outline" size={24} color="red" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCartButtonPress(item)}
          style={tailwind(
            "absolute -bottom-6 right-6 w-8 h-8 bg-gray-200 rounded-b-xl items-center pt-1"
          )}
        >
          <MaterialCommunityIcons name="cart-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleProduct;
