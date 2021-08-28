import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

// import { car } from "../Handler";

const Favourite = ({ favourites }) => {
  const [isfavEnabled, setIsfavEnabled] = useState(true);
  const deleteFavItem = (item) => {
    setIsfavEnabled(false);
    console.log(`${item.name} - Item deleted`);
  };

  const cartHandle = (item) => {
    console.log(`${item.name} - Item added`);
  };
  return (
    <View style={tailwind("flex-1 p-2")}>
      {favourites[0] ? (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => onProductPress(item)}
                style={tailwind("flex-row h-32 bg-gray-300 m-2 rounded-xl")}
              >
                <Image
                  resizeMode="cover"
                  style={tailwind("w-32 h-32 rounded-l-xl")}
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
                <Text
                  style={tailwind(
                    "absolute right-1 bottom-1 text-right text-xs"
                  )}
                >
                  by {item.seller}
                </Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => deleteFavItem(item)}
                  style={tailwind(
                    "absolute -bottom-6 left-6 w-8 h-8 bg-gray-200 rounded-b-xl items-center pt-1"
                  )}
                >
                  {isfavEnabled ? (
                    <MaterialIcons name="favorite" size={24} color="red" />
                  ) : (
                    <MaterialIcons
                      name="favorite-outline"
                      size={24}
                      color="red"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <View>
          <Text>No favourites found.</Text>
          <Text>Browse items and mark as ❤</Text>
        </View>
      )}
    </View>
  );
};

export default Favourite;
