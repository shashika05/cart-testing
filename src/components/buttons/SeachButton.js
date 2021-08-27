import React from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchButton = () => {
  const navigation = useNavigation();
  const onSearchButtonPress = () => {
    navigation.navigate("Search");
  };
  return (
    <TouchableOpacity onPress={() => onSearchButtonPress()}>
      <Feather name="search" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SearchButton;
