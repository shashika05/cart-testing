import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

import greet from "../greet";
import dataArray from "../dataArray";

export default function Home() {
  return (
    <View style={tailwind("flex-1 p-4")}>
      <Text style={tailwind("text-left text-3xl font-bold")}>{greet()}</Text>
      <Text style={tailwind("text-left text-2xl font-medium mt-4")}>
        Hot Deals
      </Text>
      <FlatList
        horizontal
        data={dataArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={tailwind("w-40 h-52 bg-gray-300 m-2 rounded-xl")}
            >
              <Image
                resizeMode="cover"
                style={tailwind("w-40 h-32 rounded-t-xl")}
                source={item.imageUrl}
              />
              <Text style={tailwind("text-center text-lg")}>{item.name}</Text>
              <Text
                style={tailwind("absolute left-1 bottom-1 text-right text-sm")}
              >
                $ {item.price}
              </Text>
              <Text
                style={tailwind("absolute right-1 bottom-1 text-right text-xs")}
              >
                by {item.seller}
              </Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={tailwind(
                  "absolute -bottom-6 left-6 w-8 h-8 bg-gray-200 rounded-b-xl items-center pt-1"
                )}
              >
                <MaterialIcons name="favorite-outline" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
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
        )}
      />
    </View>
  );
}
