import React from "react";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BackButton = () => {
  const navigation = useNavigation();
  const onBackButtonPress = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={() => onBackButtonPress()}>
      <Ionicons name="caret-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
